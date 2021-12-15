import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Input, Slider, InputNumber, Row, Col, DatePicker, Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
const { RangePicker } = DatePicker
const { Option } = Select;

const Edit = () => {
  const [difficulty, setDifficulty] = useState(1)
  const [strength, setStrength] = useState(1)

  const difficultyChange = (value) => {
    console.log('difficultyChange : ', value)
    setDifficulty(value)
  }

  const strengthChange = (value) => {
    console.log('strengthChange : ', value)
    setStrength(value)
  }
  const onChange = (value) => {
    console.log(`selected ${value}`);
  }

  const onSearch = (value) => {
    console.log('search:', value);
  }

  return (
    <div className="product">
      <div className="createHeader">
        <div className="back" >
          <Link to="/product"><FontAwesomeIcon icon={faArrowLeft} className="icon" /> 返回</Link>
        </div>
        <div className="title">编辑产品</div>
        <div className="question"><FontAwesomeIcon icon={faQuestionCircle} className="icon" /></div>
      </div>
      <div className="row">
        <div className="left">产品名称</div>
        <div className="right"><Input placeholder="请输入产品名称" /></div>
      </div>
      <div className="fourGuids">
        <div className="row">
          <div className="left">价格</div>
          <div className="right"><Input placeholder="0.00" prefix="￥" suffix="RMB" /></div>
        </div>
        <div className="row">
          <div className="left">总人数</div>
          <div className="right"><InputNumber className="total" placeholder="请输入总人数" min={1} max={1000} /></div>
        </div>
      </div>


      <div className="fourGuids">
        <div className="row">
          <div className="left">集合地</div>
          <div className="right"><Input placeholder="请输入集合地" /></div>
        </div>
        <div className="row">
          <div className="left">目的地</div>
          <div className="right"><Input placeholder="请输入目的地" /></div>
        </div>
      </div>
      <div className="fourGuids">
        <div className="row">
          <div className="left">难度</div>
          <div className="right">
            <Slider
              min={1}
              max={5}
              onChange={difficultyChange}
              value={typeof difficulty === 'number' ? difficulty : 1}
            />
          </div>
        </div>
        <div className="row">
          <div className="left">强度</div>
          <div className="right">
            <Row className="gridRow">
              <Col span={18}>
                <Slider
                  min={1}
                  max={5}
                  onChange={strengthChange}
                  value={typeof strength === 'number' ? strength : 1}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={20}
                  value={strength}
                  onChange={strengthChange}
                />
              </Col>
            </Row>

          </div>
        </div>
      </div>
      <div className="fourGuids">
        <div className="row">
          <div className="left">类型</div>
          <div className="right">
            <Select
              showSearch
              className="total"
              placeholder="请选择活动类型"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="室内">室内</Option>
              <Option value="徒步">徒步</Option>
              <Option value="雾凇">雾凇</Option>
            </Select>
          </div>
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

export default Edit