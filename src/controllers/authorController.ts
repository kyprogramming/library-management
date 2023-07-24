import express, { Router, Request, Response } from 'express'
import Author from '../models/author';

class AuthorController {

    public static newAuthor = (req: any, res: Response) => {
        const user = req.user;
        res.render('author/new', { author: new Author(), user: user });
    }

    public static viewAuthors = async (req: any, res: Response) => {
        this.renderAuthor(req, res);
    }

    public static viewAuthor = async (req: any, res: Response) => {
        const user = req.user;
        const author: any = await Author.findById(req.params.id);
        res.render('author/view', { author: author, user: user });
    }

    public static saveAuthor = async (req: Request, res: Response) => {
        // console.log(req.body);
        const { name, email } = req.body;
        const author = new Author({ name, email });
        const newAuthor = await author.save();
        this.renderAuthor(req, res);
        // console.log(newAuthor);
    }

    public static editAuthor = async (req: any, res: Response) => {
        const user = req.user;
        const author: any = await Author.findById(req.params.id);
        res.render('author/edit', { author: author, user: user });
    }


    public static updateAuthor = async (req: any, res: Response) => {
        const user = req.user;
        const author: any = await Author.findById(req.params.id);
        author.name = req.body.name;
        author.email = req.body.email;
        await author.save();
        this.renderAuthor(req, res);
    }

    public static deleteAuthor = async (req: Request, res: Response) => {
        const id = req.params.id;
        // console.log("delete req.body", req.body);
        const author = await Author.findOneAndDelete({ _id: id });
        this.renderAuthor(req, res);
    }

    private static async renderAuthor(req: any, res: any) {
        const user = req.user;
        let searchOption: any = {};
        const pattern: any = req.query.name || '';
        if (pattern) {
            searchOption.name = new RegExp(pattern, 'i');
        }
        // console.log(searchOption);
        const authors: any = await Author.find(searchOption);
        // console.log(authors);
        res.render('author/index', { authors: authors, searchOption: req.query, user: user });
    }

}

export default AuthorController;