import React from "react";
import axios from "axios";
import Pdf from "react-to-pdf";
import AddItem from "./AddItem/AddItem";
import Item from "./Item/Item";
import search from "../../Assets/img/search.png";
import close from "../../Assets/img/close.png";

export default function Main() {

    const [seeds, setSeeds] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('')
    const [order, setOrder] = React.useState('ASC');
    const ref = React.createRef();

    React.useEffect(() => {
        axios.get('https://62345c98debd056201e31e79.mockapi.io/Seeds').then((res) => {
            setSeeds(res.data);
        })
    }, []);
    const changeItem = (id,name,price,amount) => {
        axios.put(`https://62345c98debd056201e31e79.mockapi.io/Seeds/${id}`, {
            name: name,
            price: price,
            amount: amount
        })
            .then((res) => {
                axios.get('https://62345c98debd056201e31e79.mockapi.io/Seeds').then((res) => {
                    setSeeds(res.data);
                })
            })
    }

    const addItem = (name, price, amount) => {
        axios
            .post('https://62345c98debd056201e31e79.mockapi.io/Seeds', {
                name: name,
                price: price,
                amount: amount
            })
            .then((res) => {
                setSeeds([res.data, ...seeds]);
            });
    }
    const deleteItem = id => {
        axios.delete(`https://62345c98debd056201e31e79.mockapi.io/Seeds/${id}`)
        setSeeds([...seeds].filter(item => item.id !== id))
    }

    const searchInput = event => {
        setSearchValue(event.target.value)
    }
    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...seeds].sort((a,b) =>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setSeeds(sorted);
            setOrder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...seeds].sort((a,b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setSeeds(sorted);
            setOrder("ASC")
        }
    };

    return (
        <div className="container">
            <div className="topCon">
                <div className="topConLeft">
                    <h2>Каталог</h2>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className="pdf">Экспортировать в PDF</button>}
                    </Pdf>
                </div>
                <div className="topConRight">
                    <img width={16} height={16} src={search} alt="search"/>
                    <input onChange={searchInput} value={searchValue} placeholder="поиск..."/>
                    {searchValue &&
                        <img className="close"
                             onClick={() => setSearchValue('')}
                             width={12} height={12} src={close}
                             alt="close"/>
                    }
                </div>
            </div>
            <div className="Catalog">
                <div className="titles">
                    <table>
                        <thead>
                        <tr className="tableNames">
                            <th onClick={() => sorting('name')}>Название</th>
                            <th onClick={() => sorting('price')}>Цена</th>
                            <th onClick={() => sorting('amount')}>Количество</th>
                            <th>Редактирование</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <AddItem addItem={addItem}/>
                <div className="items" ref={ref}>
                    {Object.keys(seeds)
                        .filter((obj) => seeds[obj].name.toLowerCase().includes(searchValue.toLowerCase())
                            + seeds[obj].price.toLowerCase().includes(searchValue.toLowerCase())
                            + seeds[obj].amount.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((obj, i) => (
                            <Item key={i}
                                  obj={seeds[obj]}
                                  deleteItem={deleteItem}
                                  changeItem={changeItem}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}