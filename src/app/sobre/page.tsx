import React from 'react'
import "../sobre/estiloSobre.css"
import { Metadata } from 'next'


const AbboutPage = () => {
  return (
<>
  <div id="Sobre">
     <h1 id="titulo">Sobre Vagas Net</h1>
      <p id="descT">O Vaga Net é uma equipe apaixonada dedicada a redefinir a forma como as pessoas encontram oportunidades de emprego e como as empresas descobrem talentos excepcionais. 
      Nossa jornada começou com a visão de criar uma plataforma inclusiva e inovadora que não apenas conecta candidatos a empregadores, mas também cultiva um ambiente onde o potencial de cada indivíduo é nutrido e valorizado.
Somos movidos pela crença de que cada pessoa tem algo único a oferecer ao mundo do trabalho e que cada empresa pode se beneficiar ao reconhecer e aproveitar essa diversidade de talentos.
Acreditamos firmemente na transparência, na equidade e na excelência em todos os aspectos de nosso trabalho.
Combinando tecnologia avançada com uma abordagem centrada no ser humano, estamos comprometidos em oferecer uma experiência de recrutamento que seja eficiente, ética e orientada para resultados. 
Nossa equipe é composta por profissionais experientes e apaixonados, unidos pelo objetivo comum de construir um futuro onde todos possam alcançar seu pleno potencial profissional.
Junte-se a nós nesta jornada emocionante enquanto continuamos a conectar talentos a oportunidades e a moldar o futuro do recrutamento.
 </p>
    </div>
    <div>
      <h1 id="titulo">Nosso Time</h1>
        <p id="nomes">Alex Ramos</p>
        <p id="descTt">Alex é um entusiasta da tecnologia com experiência em liderar equipes de desenvolvimento de produtos inovadores.
        Ele está comprometido em criar uma plataforma robusta e intuitiva que atenda às necessidades de nossos usuários.</p>
        <p id="nomes">Elias Montan</p>
        <p id="descTt">Profissional de desenvolvimento web focado em desenvolver interfaces intuitivas e responsivas. Com habilidades em design e programação, 
        busco integrar tecnologias emergentes para proporcionar experiências de usuário excepcionais.</p>
        <p id="nomes">Adilson Santos</p>
        <p id="descTt">Desenvolvedor web apaixonado por transformar ideias criativas em realidade digital. Com experiência em projetos diversos, 
        estou sempre em busca de soluções inovadoras e escaláveis para atender às necessidades dos clientes e usuários finais.</p>
        <p id="nomes">Italo Borges</p>
        <p id="descTt">Entusiasta de tecnologia com expertise em desenvolvimento web e móvel. Comprometido com a entrega de produtos de alta qualidade, 
        busco constantemente aprimorar minhas habilidades técnicas e acompanhar as melhores práticas da indústria.</p>
    </div>
</>
  )
}

export default AbboutPage

export const metadata: Metadata = {
  title: 'VagaNet - Sobre',
  description: 'Um projeto que reune pessoas que procuram pequenos serviços'
}