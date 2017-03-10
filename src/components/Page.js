/**
 * Created by ftalaev on 07.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
    onCountBtnClick(e) {
        this.props.getCount(+e.target.innerText)
    }
    render() {
        const { count, numbers, fetching } = this.props
        return (<div className='ib page'>
            <p>
                <button className='btn' onClick={::this.onCountBtnClick}>1</button>{' '}
                <button className='btn' onClick={::this.onCountBtnClick}>2</button>{' '}
                <button className='btn' onClick={::this.onCountBtnClick}>3</button>{' '}
                <button className='btn' onClick={::this.onCountBtnClick}>4</button>{' '}
                <button className='btn' onClick={::this.onCountBtnClick}>5</button>
        </p>
            <h2>Here's what you've got:</h2>
        <h3>{count}</h3>
        {
            fetching ?
        <p>Loading...</p>
    :
    <p>You have {numbers.length} numbers.</p>
    }
    </div>)
    }
}

Page.propTypes = {
    count: PropTypes.number.isRequired,
    numbers: PropTypes.array.isRequired,
    getCount: PropTypes.func.isRequired
}