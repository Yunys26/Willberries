import React from 'react';
import PropTypes from 'prop-types';
import { new_arrival } from '../mock/data'

const NewArrival = () => {
    return (
        <section className="newArriwal">
            <div className="title">
                <h3>New Arrival</h3>
                <p>View All</p>
            </div>
            <div className="newProducts">
                {new_arrival.map(({id, name, category, price, img, value, status}) => (
                    <div className="card">
                        <div className="status"></div>
                        <div className="info-products">
                            <img />
                            <p>{name}</p>
                            <p>{category}</p>
                            <p>{value + price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


NewArrival.propTypes = {

};


export default NewArrival;
