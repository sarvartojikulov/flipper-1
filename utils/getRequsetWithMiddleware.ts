import { NextPageContext } from "next";
import Router from "next/router";
import fetch from 'isomorphic-unfetch'



export async function getRequsetWithMiddleware(url: string, ctx:NextPageContext){
  const cookie = ctx.req?.headers.cookie;
  const res = await fetch(url,{
    headers: {
      cookie: cookie!
    }
  });
  //NOTE Router is client side. to handle it on server use ctx.req
  if (res.status === 401 && !ctx.req){
    Router.replace('/login');
    return;
  }
  if(res.status === 401 && ctx.req){
    ctx.res.writeHead(302, {
      Location: 'http://localhost:3000/login'
    })
    ctx.res.end()
    return;
  }
  const data = await res.json();
  return {list: data}
}