import React, { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Input, InputNumber, DatePicker } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'
const { RangePicker } = DatePicker
const code = 'const a = 0;';

const Create = () => {
  return (
    <div className="product">
      <div className="createHeader">
        <div className="back" ><FontAwesomeIcon icon={faBackspace} className="icon" /> 返回</div>
      </div>
      <div className="row">
        <div className="left">产品名称</div>
        <div className="right"><Input placeholder="请输入产品名称" /></div>
      </div>
      <div className="row">
        <div className="left">价格</div>
        <div className="right"><Input placeholder="0.00" prefix="￥" suffix="RMB" /></div>
      </div>
      <div className="row">
        <div className="left">总人数</div>
        <div className="right"><InputNumber className="total" placeholder="请输入总人数" min={1} max={1000} /></div>
      </div>
      <div className="row">
        <div className="left">集合地</div>
        <div className="right"><Input placeholder="请输入集合地" /></div>
      </div>
      <div className="row">
        <div className="left">目的地</div>
        <div className="right"><Input placeholder="请输入目的地" /></div>
      </div>
      <div className="row">
        <div className="left">开始/结束时间</div>
        <div className="right">
          <RangePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            style={{ width: '100%' }}
            placeholder={'结束时间'} />
        </div>
      </div>
      <div className="row">
        <div className="left">产品内容</div>
        <div className="right">
          <CKEditor
            editor={ClassicEditor}
            data="<p>产品内容!</p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
        </div>
      </div>
      <div className="button">
        <div className="submit">保存</div>
      </div>
    </div>
  )
}

export default Create