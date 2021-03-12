import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchWeather, deleteCity } from "../../store/actions/citiesActions";
import {City} from "../City/City";
import { Button, Modal } from "react-bootstrap";


interface ICitiesProps {

  }


export const CitiiesList:React.FC<ICitiesProps> = () => {

  const cities = useSelector((state:any) => state.citiesReducer);


  
  const dispatch = useDispatch();

  const initialValue = "";

  const [city, addCity] = useState(initialValue);


 
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add City</Modal.Title>
        </Modal.Header>
        <input
          style={{ marginRight: "10px", marginLeft: "10px" }}
          type="text"
          value={city}
          onChange={(e) => addCity(e.target.value)}
        />
       <Modal.Footer>
          <Button
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </Button>
          <Button
            onClick={() => {
              dispatch(fetchWeather(city));
              setShow(false);
              addCity(initialValue);
           
            }}
          >
            Add city
          </Button>
        </Modal.Footer>
      </Modal>

      <Button 
        onClick={handleShow}
        style={{ marginBottom: "20px" }}
      >
        Add city
      </Button>
      <div>
        {cities.weather &&
        cities.error != "Request failed with status code 404" ? (
          <div>
            {cities.weather.map((one:string, index:number) => {
              return (
                <div key={index} style={{ marginTop: "20px" }}>
                  {index === 0 ? (
                    <p style={{ fontSize: "22px" }}>Мое местоположение </p>
                  ) : null}

                  <City key={index} one={one}  />

                  {index !== 0 ? (
                    <button
                      className="btn-primary"
                      style={{ marginTop: "20px" }}
                      onClick={() => dispatch(deleteCity(index))}
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

   
    </div>
  );
}
