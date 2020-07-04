import Link from "next/link"

export default function Layout ({children}) {
    let companyName = "Octo";
    let companyEvaluation = 1000000;
    let companySuccessRate = 10;
    return (
        <div>
            <div className={"companyName"}><h1>{companyName}</h1></div>
            <div className={"companyMetrics"}>
                <div className={"companyEvaluation"}>Your evaluation: {companyEvaluation}NOK</div>
                <div className={"companySuccessRate"}>Your success rate: {companySuccessRate}%</div>
            </div>
            <div className={"phases"}>
                <div className={"phase"}><Link href={"/phase/problem"}>Problem</Link></div>
                <div className={"phase"}><Link href={"/phase/team"}>Team</Link></div>
                <div className={"phase"}><Link href={"/phase/solution"}>Solution</Link></div>
                <div className={"phase"}><Link href={"/phase/launch"}>Launch</Link></div>
                <div className={"phase"}><Link href={"/phase/scale"}>Scale</Link></div>
            </div>
            {
                children
            }
        </div>
    );
}