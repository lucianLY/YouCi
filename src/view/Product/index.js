import React, { useState, useEffect } from 'react'
import { Table, Tag, Space } from 'antd'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEraser, faTrashAlt, faYenSign } from '@fortawesome/free-solid-svg-icons'

import 'antd/dist/antd.css';
import './index.scss'

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    className: 'tdCenter',
  },
  {
    title: '产品名称',
    dataIndex: 'productName',
    key: 'productName',
    className: 'productName',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    className: 'tdCenter',
    render: price => <span className='price'><FontAwesomeIcon icon={faYenSign} /> {price.toFixed(2)}</span>
  },
  {
    title: '已报名人数',
    dataIndex: 'registered',
    key: 'registered',
    className: 'tdCenter',
  },
  {
    title: '总人数',
    dataIndex: 'total',
    key: 'total',
    className: 'tdCenter',
  },
  {
    title: '集合地/目的地',
    dataIndex: 'place',
    key: 'place',
    render: tags => (<>
      {tags.map(tag => {
        return (
          <Tag>{tag}</Tag>
        )
      })}
    </>)
  },
  {
    title: '活动开始时间',
    dataIndex: 'startTime',
    key: 'startTime',
    className: 'tdCenter',
  },
  {
    title: '活动结束时间',
    dataIndex: 'endTime',
    key: 'endTime',
    className: 'tdCenter',
  },
  {
    title: '操作',
    dataIndex: 'id',
    render: id => (
      <>
        <Link to={`edit/${id}`} className='link'><FontAwesomeIcon icon={faEdit} /></Link>
        <Link to={`delete/${id}`} className='link'><FontAwesomeIcon icon={faTrashAlt} /></Link>
      </>
    )
  }
]

const data = [
  {
    id: '1',
    key: 1,
    productName: '12/17日 【上海出发】轻装临安三尖，勇者集结看高山云海，观美丽武松',
    price: 320,
    registered: 3,
    total: 20,
    place: ['上海体育馆', '浙江'],
    startTime: '2021/12/14 09:00',
    endTime: '2021/12/16 20:00'
  },
  {
    id: '2',
    key: 2,
    productName: '12/18~19日 【上海出发】冬日崇明岛|崇明美食|采橘子|泡温泉|西山观鸟',
    price: 498,
    registered: 3,
    total: 20,
    place: ['汶水路', '崇明岛'],
    startTime: '2021/12/18 09:00',
    endTime: '2021/12/19 20:00'
  },
]

const Product = () => {
  return (
    <div className="product" >
      <div className="header">
        <Link to='create' className="add">添加产品</Link>
      </div>

      <div className="producTab">
        <Table columns={columns} dataSource={data} bordered />
      </div>
    </div>
  )
}

export default Product