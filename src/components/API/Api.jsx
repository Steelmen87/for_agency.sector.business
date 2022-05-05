import {useEffect, useState} from "react";
import style from "../../style/style.module.css";

export const Api = ({posts,setPosts}) => {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then(res => res.json())
            .then(setPosts)
    }, [])
    return <div>
        {posts.map(el =>
            <div className={style.table} key={el.id}>
                <div className={`${style.tablet__item} ${style.id_items}`}>{el.id}</div>
                <div className={`${style.tablet__item} ${style.id_title}`}>{el.title}</div>
                <div className={`${style.tablet__item} ${style.id_title}`}>{el.body}</div>
            </div>)
        }
    </div>
}