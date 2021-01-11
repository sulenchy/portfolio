export function truncateText(arg: { len: number, text: string }){
    const finalText: string = arg.text.length > arg.len ? `${ arg.text.substr(0, arg.len) } ...` : arg.text;
    return finalText;
}

export const projectList : { title: string, description: string, technologies: string, image: string, id: number }[] = [
    {
        title: "Vertical Search Engine For School Research",
        description: "A vertical search engine for students who want to apply for postgraduate research studies and look for potential supervisors at the following UK university: Imperial, lancaster and coventry university. It is a web scrapper.",
        technologies: "Nodejs, expressJs, cheerio, requestJs and minisearch",
        image: "",
        id: 1,
    },
    {
        title: "Edugate(Backend)",
        description: "Edugate centers around providing result management system to schools expecially high school.",
        technologies: "Nodejs, Javascript, express, sequelize, Postgres, nodemailer, excel, mailgun-js, mocha and chai",
        image: "",
        id: 2,
    },
    {
        title: "Edugate(Frontend)",
        description: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.",
        technologies: "Nodejs, expressJs, javascript ...",
        image: "",
        id: 3,
    },
];