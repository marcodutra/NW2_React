import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherList(){
    return(
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

    );
}

export default TeacherList;