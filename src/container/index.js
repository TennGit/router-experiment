/**
 * Created by hengl on 09/05/2017.
 */

import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'
import App from "../App";


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = () => {
    console.log('map dispatch')
    return {}
}

const Container = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))

export default Container;