import React from 'react';
import { GifGridItem } from "../../components/GifGridItem";
const { shallow } = require("enzyme")

describe('Pruebas GifGridItem', () => {

    const testImg = {
        id: "3o7budMRwZvNGJ3pyE",
        title: "baby groot hello GIF",
        url: "https://media0.giphy.com/media/3o7budMRwZvNGJ3pyE/200.gif?cid=6f54fede8s54pr16kgr6lf8j3r09deuycwk3wi9y69gfz6rg&rid=200.gif",
    }
    const wrapper = shallow( <GifGridItem img={ testImg } />);

    test('se muestra el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();

    })

    test("Se debe mostrar el titulo que se paso por props en el componente", () => {
        const value = wrapper.find("p").text().trim();
        
        expect( value ).toBe( testImg.title);
    })

    test("Se debe mostrar la imagen que se paso por props en el componente", () => {
        const img = wrapper.find("img");
        const imgAlt = img.props().alt;
        const imgUrl = img.props().src;
        
        expect( imgAlt ).toBe( testImg.title);
        expect( imgUrl ).toBe( testImg.url);
    })

    test("Debe de contener la clase animate__backInLeft", () => {
        const div = wrapper.find("div");
        const divClasses = div.props();
        const animatedClass = "animate__backInLeft";

        expect( divClasses.className.includes ( animatedClass ) ).toBe( true );

        console.log(divClasses);
    })
    
})
