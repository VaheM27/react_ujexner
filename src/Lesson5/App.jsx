import React from "react";
import "./App.css"

export default function App() {
  return (
    <div>
      <h1>GIT Intro</h1>
      <code>
        <ul>
          <li>git add . --- avelacnel uxarkelu hamar</li>
          <li>git commit -m "Message" --- uxarkelu namak</li>
          <li>git push origin "uxxutyuny" --- depi ur enq uxarkum</li>
          <li>git status --- nerkayis giti vichaky</li>
          <li>git checkout "anuny branchi" --- texapoxvel tvayl branch</li>
          <li>
            git swicth -c "anuny branchi" --- sarqel branch ev texapoxvel tvyal
            branchi vra
          </li>
          <li>git reset "commiti hashCode"</li>
          <li>git pull --- stanumenq verhcin updatnery</li>
          <li>
            git pull origin "branchi anuny" --- stanumenq verhcin updatnery
            tvyal branchic
          </li>
          <li>git log --- bolor popoxutyunery bolor jamanakneri yntacqum </li>
          <li>
            git clone "linky repoi" --- clonavorum enq tvyal uxx. projecty{" "}
          </li>
          <li>
            git init --- avelacnuma git gaxapary dzer projecti mech, naev
            stexcuma ".git" hidden foldery{" "}
          </li>
          <li>git config user.name "dzer githubi loginy"</li>
          <li>git config user.email "dzer githubi email"</li>
        </ul>
      </code>
    </div>
  );
}
