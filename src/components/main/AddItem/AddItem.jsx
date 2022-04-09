import React from "react";

export default function AddItem ({addItem}) {

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [amount, setAmount] = React.useState('');

    return (
        <form className="addItem">
                        <span>
                            <input type="text"
                                   onChange={event => setName(event.target.value)}
                                   value={name}
                                   placeholder="Введите название"/>
                        </span>
                        <span>
                            <input type="text"
                                   onChange={event => setPrice(event.target.value)}
                                   value={price}
                                   placeholder="Введите Цену"/>
                        </span>
                        <span>
                            <input type="text"
                                   onChange={event => setAmount(event.target.value)}
                                   value={amount}
                                   placeholder="Введите Количество"/>
                        </span>
            <span><button className="button" type='button' onClick={() => addItem(name,price,amount)}>Добавить</button></span>
        </form>
    )
}