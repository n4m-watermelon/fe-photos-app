import React, { useEffect, useState } from "react";
import {Switch, Route , useRouteMatch } from "react-router-dom";
import Me from './me'
import IndexPost from './indexPost'
import Header from "./header";


export default function Home() {
  let { path } = useRouteMatch();
  return (
      <div>
       <Header />
         <Switch>
           <Route path="/me" component={Me} />
           <Route exact path={path} component={IndexPost} />
        </Switch> 
      </div>
  );
}
