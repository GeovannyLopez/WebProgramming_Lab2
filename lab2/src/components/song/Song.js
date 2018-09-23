import React, { } from "react";
import { Switch, Route } from 'react-router-dom'
import Index from './Index';
import Details from './Details';
import Edit from './Edit';
import Create from './Create';
import Delete from './Delete';

const Song = () => (
    <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/Song/Index' component={Index} />
        <Route exact path='/Song/Create' component={Create} />
        <Route path='/Song/Details/:id' component={Details} />
        <Route path='/Song/Edit/:id' component={Edit} />
        <Route path='/Song/Delete/:id' component={Delete} />
    </Switch>
)

export default Song;