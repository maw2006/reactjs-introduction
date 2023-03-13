import React from 'react'
import './APIs.css'
import { useEffect, useState } from "react";
import {  SectionWrapper } from '../../combonents/index'
import { SecandryButton } from '../../combonents/index'

function HSC() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // ملاحظة: تعني المصفوفة الفارغة []
    // سيتم تشغيل useEffect مرة واحدة
    // بطريقة مشابه لـ componentDidMount
    useEffect(() => {
      fetch("https://gorest.co.in/public/v2/users")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
             // ملاحظة: من المهم التعامل مع الأخطاء هنا
          // catch() بدلًا من من استخدام الكتلة 
          // لكي لا نقبل الاستثناءات من أخطاء فعليّة في المكوّنات
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <SectionWrapper >
        <table id="users">
          <tr>
            <th>id</th>
            <th>name</th>
            <th>gender</th>
            <th>status</th>
            <th>email</th>
          </tr>
          {items.map(item => (
            <tr>
             <td className='key-id'><SecandryButton>{item.id}</SecandryButton></td>
              <td>{item.name}</td> 
              <td>{item.gender}</td>
              <td>{item.status}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </table>
        </SectionWrapper>
      );
    }
  }



export default HSC