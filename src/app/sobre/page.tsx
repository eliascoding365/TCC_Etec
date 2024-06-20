import React from 'react';
import { Metadata } from 'next';

const AbboutPage = () => {
  return (
    <>
      <div id="Sobre" className="bg-gradient-to-b from-blue-600 to-blue-500 p-8 md:p-16  shadow-xl text-white">
        <h1 id="titulo" className="text-4xl md:text-6xl font-extrabold text-center mb-6 md:mb-12 tracking-wide">Sobre Vaga Net</h1>
        <p id="descT" className="text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto text-center">
          Vaga Net é uma equipe apaixonada dedicada a redefinir a forma como as pessoas encontram oportunidades de emprego e como as empresas descobrem talentos excepcionais.
          Nossa jornada começou com a visão de criar uma plataforma inclusiva e inovadora que não apenas conecta candidatos a empregadores, mas também cultiva um ambiente onde o potencial de cada indivíduo é nutrido e valorizado.
          Somos movidos pela crença de que cada pessoa tem algo único a oferecer ao mundo do trabalho e que cada empresa pode se beneficiar ao reconhecer e aproveitar essa diversidade de talentos.
          Acreditamos firmemente na transparência, na equidade e na excelência em todos os aspectos de nosso trabalho.
          Combinando tecnologia avançada com uma abordagem centrada no ser humano, estamos comprometidos em oferecer uma experiência de recrutamento que seja eficiente, ética e orientada para resultados.
          Nossa equipe é composta por profissionais experientes e apaixonados, unidos pelo objetivo comum de construir um futuro onde todos possam alcançar seu pleno potencial profissional.
          Junte-se a nós enquanto continuamos a conectar talentos a oportunidades e a moldar o futuro do recrutamento.
        </p>
      </div>
      <div className="mt-16">
        <h1 id="titulo" className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12 tracking-wide">Nosso time</h1>
        <div className="flex flex-wrap justify-center gap-8">
        <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-500">
            <div className="flex items-center mb-4">
              <div>
                <p id="nomes" className="text-xl font-semibold text-gray-900">Adilson Santos</p>
                <p className="text-gray-600 text-sm">Estudante de programação</p>
              </div>
            </div>
            <p id="descTt" className="text-gray-700 text-base">
              Desenvolvedor web apaixonado por transformar ideias criativas em realidade digital. Com experiência em projetos diversos,
              estou sempre em busca de soluções inovadoras e escaláveis para atender às necessidades dos clientes e usuários finais.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-500">
            <div className="flex items-center mb-4">
              <div>
                <p id="nomes" className="text-xl font-semibold text-gray-900">Alex Ramos</p>
                <p className="text-gray-600 text-sm">Estudante de programação</p>
              </div>
            </div>
            <p id="descTt" className="text-gray-700 text-base">
              Alex é um entusiasta da tecnologia com experiência em liderar equipes de desenvolvimento de produtos inovadores.
              Ele está comprometido em criar uma plataforma robusta e intuitiva que atenda às necessidades de nossos usuários.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-500">
            <div className="flex items-center mb-4">
              <div>
                <p id="nomes" className="text-xl font-semibold text-gray-900">Elias Montan</p>
                <p className="text-gray-600 text-sm">Estudante de programação</p>
              </div>
            </div>
            <p id="descTt" className="text-gray-700 text-base">
              Profissional de desenvolvimento web focado em desenvolver interfaces intuitivas e responsivas. Com habilidades em design e programação,
              busco integrar tecnologias emergentes para proporcionar experiências de usuário excepcionais.
            </p>
          </div>
          
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-500">
            <div className="flex items-center mb-4">
              <div>
                <p id="nomes" className="text-xl font-semibold text-gray-900">Italo Borges</p>
                <p className="text-gray-600 text-sm">Estudante de programação</p>
              </div>
            </div>
            <p id="descTt" className="text-gray-700 text-base">
              Entusiasta de tecnologia com expertise em desenvolvimento web e móvel. Comprometido com a entrega de produtos de alta qualidade,
              busco constantemente aprimorar minhas habilidades técnicas e acompanhar as melhores práticas da indústria.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbboutPage;

export const metadata: Metadata = {
  title: 'VagaNet - Sobre',
  description: 'Um projeto que reune pessoas que procuram pequenos serviços'
};
