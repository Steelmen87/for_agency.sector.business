import './App.css';
import style from "./style/style.module.css"
import id_img from "./img/Group 1.png"
import {Api} from "./components/API/Api";
import {useEffect, useState} from "react";

function App() {
    const [posts, setPosts] = useState([]);
    const clickHandler = () => {
        let reverse = [...posts].reverse()
        setPosts(reverse)
    }
    const [val, setVal] = useState('')
    const changeValue = (e) => {
        setVal(e.currentTarget.value)

    }
    useEffect(() => {
        let S = posts.filter((item) => item.title.includes(val))
        setPosts(S)
    }, [val])
    return (
        <div className={style.container}>

            <input
                value={val}
                onChange={changeValue}
                placeholder="Поиск"
                type="text"
                className={style.class__input}
            />
            <div className={style.header__table}>
                <div className={style.header__table_item}>ID
                    <img
                        onClick={clickHandler}
                        className={style.id_img}
                        src={id_img}
                        alt=""/>
                </div>
                <div className={style.header__table_item}>Title
                    <img className={style.id_img} src={id_img} alt=""/></div>
                <div className={style.header__table_item}>Description
                    <img className={style.id_img} src={id_img} alt=""/></div>
            </div>
            <Api posts={posts} setPosts={setPosts}/>

        </div>
    );
}

export default App;
