import React from 'react';

function AllDataTable({ accountList }) {

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accountList.map((account, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{account.name}</td>
                                    <td>{account.email}</td>
                                    <td>{account.password}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                {/* <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Drake</td>
                        <td>Spellman</td>
                        <td>@get</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Howard</td>
                        <td>Thorton</td>
                        <td>@slim</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Chris</td>
                        <td>Shwarma</td>
                        <td>@gmail</td>
                    </tr>
                </tbody> */}
            </table>
        </>
    )
}

export default AllDataTable

