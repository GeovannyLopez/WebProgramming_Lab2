import React, { Component } from "react";

import Layout from '../layout/Layout';

export default class Delete extends Component{
    render (){
        return (
            <Layout userName={"Geo"}>
                <div>
                    Delete {this.props.match.params.id}
                </div>
            </Layout>
        );
    }
}