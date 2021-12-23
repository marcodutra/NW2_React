import React from "react";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                   <div className="input-block">
                     <label htmlFor="subject">Mateŕia</label>
                     <input type="text" id="subject" />
                   </div>  

                   <div className="input-block">
                     <label htmlFor="subject">Dia da semana</label>
                     <input type="text" id="week_day" />
                   </div>

                   <div className="input-block">
                     <label htmlFor="subject">Hora</label>
                     <input type="text" id="time" />
                   </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars.githubusercontent.com/u/50268967?v=4" alt="Marco aurelio"/>
                        <div>
                            <strong>Marco Aurelio</strong>
                            <span>Programação</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnlogias na área de programação
                        <br/><br/>
                        Apaixonado por programar novos softwares para mudar a vida das pessoas através da tecnlogia
                    </p>
                    <footer>
                        <p>
                          Preço/Hora 
                          <strong>R$ 60,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;