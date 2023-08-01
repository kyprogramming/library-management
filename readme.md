Deployment Steps:

1. install iisnode https://github.com/Azure/iisnode - https://github.com/Azure/iisnode/releases
2. After installing the “.msi” it will add a new module called “iisnode” which points to a “.dll”.
3. Open IIS Manger > At Server level > Feature Delegation >Handler Mapping > Read/Write
4. create  site called “NodeJSApp”, with its own Application Pool”, and pointing to where we created our Nodejs app with port
5. IIS Manager > Your Site > Handler Mapping Module > Add Module Mapping as iisnode and path server.js
6. configure rewrite url in rewrite module /index.js in web.config file
7. Verify IIS Manager > Configuration Editor > system.webServer/iisnode > nodeProcessCommandLine > C:\Program Files\nodejs\node.exe
8. Provide IIS_IUSRS access to the folder.
 

Web.config file
-----------------------------------------------------------------------------------------------------------------
 <?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <handlers>
            <add name="iisnode" path="server.js" verb="*" modules="iisnode" resourceType="File" />
        </handlers>
        <iisnode nodeProcessCommandLine="C:\Program Files\nodejs\node.exe" />
        <rewrite>
            <rules>
                <rule name="nodejs" stopProcessing="true">
                    <match url="(.*)" />
                    <action type="Rewrite" url="/server.js" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
