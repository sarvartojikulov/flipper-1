export interface IDeck {
    deckName: string;
    uid: string;
    content: Array<IQuestion>;
    createdAt: string;
    userHandle: string;

}

export interface IQuestion {
    question: string;
    answer: string;
}