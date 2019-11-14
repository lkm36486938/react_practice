import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            contactData: [
                {name : 'Abet', phone: '010-0000-0001'},
                {name : 'Betty', phone: '010-0000-0002'},
                {name : 'Charlie', phone: '010-0000-0003'},
                {name : 'David', phone: '010-0000-0004'},
                {name : 'Eric', phone: '010-0000-0005'},
                {name : 'Froga', phone: '010-0000-0006'},
            ],
            keyword: ""
        };

        this.search = this.search.bind(this)
    }


    // 검색기능
    search(e){
        this.setState({
            keyword : e.target.value
        })
    }

    render(){
        // 데이터 세팅 부분
        const mapTocComponents = (data) => {
            // 정렬작업. 인수가 없다면 오름차순
            data.sort(); 

            // 사용자 검색값에 맞는 주소록만 출력
            data = data.filter((contact)=>{
                return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
            })
            
            // 데이터 뿌려주기
            return data.map((contact, i) => {
                return (<ContactInfo contact={contact} key={i}/>);
            });
        };

        // 렌더링부분
        return (
            <div>
                <h1>Contacts</h1>
                <input name='keyword' placeholder='Search' value={this.state.keyword} onChange={this.search}/>
                <div>{mapTocComponents(this.state.contactData)}</div>
            </div>
        )
    }
}