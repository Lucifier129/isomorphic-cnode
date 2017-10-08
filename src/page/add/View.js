import React, { Component } from "react";
import classnames from "classnames";
import { Link, Input } from "react-imvc/component";
import Layout from "../../component/Layout";

export default function View({ state, handlers }) {
    let errorType = state.errorType
    let titleClass = classnames({
        'add-title': true,
        'err': errorTypeList.includes('title'),
    })
    let contentClass = classnames({
        'add-content': true,
        'err': errorTypeList.includes('content')
    })
    return (
        <Layout>
            <div className="add-container">
		        <div className="line">选择分类：
		            <Select />
		            {' '}
		            <a className="add-btn" onClick={handlers.handlePublish}>
                        发布
                    </a>
		        </div>
		        <div className="line">
		            <Input
                        name="title"
		            	className={titleClass}
		            	placeholder="标题，字数10字以上"
		            	maxLength="100"
		            />
		        </div>
		        <Input as="textarea"
                    name="content"
		        	className={contentClass}
		            placeholder='回复支持Markdown语法,请注意标记代码'
		            rows="35"
		        />
		    </div>
        </Layout>
    )
}


const tabList =  [{
    type: 'share',
    text: '分享',
}, {
    type: 'ask',
    text: '问答',
}, {
    type: 'job',
    text: '招聘',
}]

function Select() {
    return (
        <Input as="select" name="tab" className="add-tab">
        {
            tabList.map(({ type, text }) => 
                <option value={type} key={type}>{text}</option>
            )
        }
        </Input>
    )
}