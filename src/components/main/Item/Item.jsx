import React from "react";
import "./Item.scss"

export default function Item({obj, deleteItem, changeItem}) {
    const [change, setChange] = React.useState(false)
    const [name, setName] = React.useState(obj.name);
    const [price, setPrice] = React.useState(obj.price);
    const [amount, setAmount] = React.useState(obj.amount);
    return (
        <div className="item">
            <table>
                <tbody>
                <tr className="itemTable">
                    {change ? <span>
                            <input type="text"
                                   onChange={event => setName(event.target.value)}
                                   value={name}/>
                                </span> :
                            <td className="tableName">{obj.name}</td>}
                    {change ? <span>
                            <input type="text"
                               onChange={event => setPrice(event.target.value)}
                               value={price}/>
                                </span> :
                            <td><b>{obj.price}</b> рублей</td>}
                    {change ? <span>
                            <input type="text"
                               onChange={event => setAmount(event.target.value)}
                               value={amount}/>
                                </span> :
                            <td><b>{obj.amount}</b></td>}
                    <td>
                        <div className="buttons">
                            {change ? <button type="button" onClick={() => changeItem(obj.id, name, price, amount) + setChange(false)}>Подтвердить
                                    изменение</button> :
                                <button type="button" onClick={() => setChange(true)}>Изменить</button>
                            }
                            {change ? null :
                                <button type="button" onClick={() => deleteItem(obj.id)}>Удалить</button>}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}