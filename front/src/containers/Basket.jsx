import React, { useState, useEffect } from 'react';
import "./Basket.css"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import axios from "axios"

export default function Basket({cartItems, onAdd, onRemove}) {    
  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [showAlert, setShowAlert] = useState(false);
  const radios = [
    { name: 'Visa', value: '1' },
    { name: 'MasterCard', value: '2' },
    { name: 'Paypal', value: '3' },
  ];

  const hundleSubmitOrder = (e) =>{
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => {
      window.location="http://127.0.0.1:5173/"     
    }, 3000);

  }
  const itemsPrice = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.Price * currentValue.quantity, 0)
    const taxPrice = itemsPrice * 0.20
    const shippingPrice = itemsPrice >= 100 ? 0 : 10
    const totalPrice = itemsPrice + taxPrice + shippingPrice

    useEffect(() => {
      axios.get('/ordered/add')
      .then(function (response) {
        // en cas de réussite de la requête
        console.log(response);
      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
      })
    }, []);

  return (

    <div className='row mt-5 container' style={{margin: "auto"}}>
        <div className='col'>
            <div>{ cartItems.length === 0 && <p className='text-center fs-1'>Votre panier est vide</p> }</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row align-items-center m-3 basket_product" style={{borderRadius: "5px"}}>   
                  <img src={item.imgSrc} alt={item.title} style={{width: "100px", height:"auto"}} className="basket_img"/>
                  <div className='col-2 basket_title' >{item.title}</div>
                  <div className='col-2 d-flex justify-content-between align-items-center mb-2'>
                    <button type='button' onClick={() => onAdd(item)} className="btn btn-success" style={{width: "50px", marginRight: "10px"}}>+</button>
                    <button type='button' onClick={() => onRemove(item)} className="btn btn-danger"  style={{width: "50px"}}>-</button>
                  </div>
                  <div className='col-2'>
                    {item.quantity} x {item.Price.toFixed(2) /* le prix sera de deux chiffre après la virgule*/ }
                  </div>
                  <hr className='mt-2' />
                </div>
              )
            )}
            {cartItems.length !== 0 && (
              <div className='mt-5'>
            
                <div className='row'>
                  <div className='col-2'>Prix des produits</div>
                  <div className='col-1 text-end'>{itemsPrice}&#8364;</div>
                </div>

                <div className='row'>
                  <div className='col-2'>Taxes</div>
                  <div className='col-1 text-end'>{taxPrice.toFixed(2)}&#8364;</div>
                </div>

                <div className='row'>
                  <div className='col-2'>Livraison</div>
                  <div className='col-1 text-end'>{shippingPrice}&#8364;</div>
                </div>

                <div className='row'>
                  <div className='col-2'><strong>Total commande</strong></div>
                  <div className='col-1 text-end'> <strong>{totalPrice.toFixed(2)}&#8364;</strong></div>
                </div>
                <hr />
                <div className='row'>
                </div>
              </div>
            )

            }
        </div>

        { cartItems.length !== 0 &&(

          <aside className='col pt-4 pb-4' style={{ background:"rgb(234, 204, 129)", borderRadius: "5px" }}>
            <form onSubmit={hundleSubmitOrder}>
              <h2>Méthode de Paiement</h2>
              <p>Type de Carte</p>
              <ButtonGroup style={{marginBottom: "5px"}}>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    // variant={'outline-danger'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <div className='mb-2'>
                <img className='border me-1' style={{cursor: "pointer"}} src="../src/media/images/Visa_logo.svg" alt="visa" />
                <img className='border me-1' style={{cursor: "pointer"}} src="../src/media/images/mastercard_logo.svg" alt="mastercard" />
                <img className='border' style={{cursor: "pointer"}} src="../src/media/images/paypal_logo.svg" alt="paypal" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">Nom sur la Carte</label>
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" required />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputCarte" className="form-label">Numéro de Carte</label>
                <input type="text" className="form-control" id="exampleInputCarte" required />
              </div>

              <div className='row'>
                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputDate" className="form-label">Date d'Expiration</label>
                  <input type="date" className="form-control" id="exampleInputDate" aria-describedby="nameHelp" required />
                </div>

                <div className="col-6 mb-3">
                  <label htmlFor="exampleInputCvv" className="form-label">Cvv</label>
                  <input type="password" className="form-control" id="exampleInputCvv" maxLength="3" required />
                </div>
              </div>

              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                <label className="form-check-label" htmlFor="exampleCheck1">J'accepte les conditions  </label>
              </div>
              <button type="submit" className="btn btn-primary w-100">Valider Paiement</button>
            </form>   
            {showAlert && <div className="alert alert-success" role="alert">Votre commande a été prise en compte</div>}
          </aside>)
        }

    </div>
    

  )
}
