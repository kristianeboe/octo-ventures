import Link from "next/link"

export default function Layout ({children}) {
    let companyName = "Octo";
    let companyEvaluation = 1000000;
    let companySuccessRate = 10;
    return (
        <div className={"container"}>
            <div className={"companyName"}><h1>{companyName}</h1></div>
            <div className={"companyMetrics"}>
                <div className={"companyEvaluation"}>Your evaluation: {companyEvaluation}NOK</div>
                <div className={"companySuccessRate"}>Your success rate: {companySuccessRate}%</div>
            </div>
            <br/>
            <div className={"phases"}>
                <Link href={"/phase/problem"}><div className={"phase"}>PROBLEM</div></Link>
                <Link href={"/phase/team"}><div className={"phase"}>TEAM</div></Link>
                <Link href={"/phase/solution"}><div className={"phase"}>SOLUTION</div></Link>
                <Link href={"/phase/launch"}><div className={"phase"}>LAUNCH</div></Link>
                <Link href={"/phase/scale"}><div className={"phase"}>SCALE</div></Link>
            </div>
            <br/>
            {
                children
            }
        </div>
    );
}