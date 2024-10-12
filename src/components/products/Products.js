import React, { useState, useEffect } from 'react';
import './Products.css';
import axios from 'axios';
import Product from './Product';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();

    let [productList, setproductList] = useState([]);
    let [limit, setLimit] = useState(5);
    let [offset, setOffset] = useState(0);
    let [page, setPage] = useState(1);

    const setPageData = (newLimit, newPage) => {
        let newOffset = newLimit * newPage - newLimit;
        setPage(newPage);
        setLimit(newLimit);
        setOffset(newOffset);
    };

    useEffect(() => {
        try {
            axios.get(`${apiUrl}/products?limit=${+limit}&offset=${+offset}`).then((res) => {
                setproductList(res.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    }, [limit, offset, apiUrl]);

    return (
        <>
            <div className="table-div">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Dropdown>
                        <span>Show</span>
                        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                            {limit}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => {
                                    setPageData(5, page);
                                }}
                            >
                                5
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    setPageData(10, page);
                                }}
                            >
                                10
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    setPageData(15, page);
                                }}
                            >
                                15
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev
                            disabled={page - 1 < 1}
                            onClick={() => {
                                setPageData(limit, page - 1);
                            }}
                        />
                        <Pagination.Ellipsis disabled />
                        <Pagination.Item
                            disabled={page - 1 < 1}
                            onClick={() => {
                                setPageData(limit, page - 1);
                            }}
                        >
                            {page - 1}
                        </Pagination.Item>
                        <Pagination.Item active>{page}</Pagination.Item>
                        <Pagination.Item
                            onClick={() => {
                                setPageData(limit, page + 1);
                            }}
                        >
                            {page + 1}
                        </Pagination.Item>
                        <Pagination.Ellipsis disabled />
                        <Pagination.Next
                            onClick={() => {
                                setPageData(limit, page + 1);
                            }}
                        />
                        <Pagination.Last />
                        <Button
                            variant="primary"
                            style={{ float: 'inline-end', marginLeft: '100px' }}
                            onClick={() => {
                                navigate('../');
                            }}
                        >
                            Home
                        </Button>
                    </Pagination>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((product) => {
                                return (
                                    <Product
                                        key={product.id}
                                        id={product.id}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                        category={product.category.name}
                                    ></Product>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default Products;
