function customrender(element,container){
    const domelement=document.createElement(element.type);
    domelement.innerHTML=element.children;
    for (const prop in element.props) {
        if(prop === 'children' ) continue;
        console.log(prop);
        domelement.setAttribute(prop,element.props[prop]);
        container.appendChild(domelement);
    }
    
}
const reactelement={
    type : 'a',
    props : {
        href:"www.youtube.com",
        target :'_blank',
    },
    children :"youtube.com"
}

const rootcontainer=document.querySelector("#root");

customrender(reactelement,rootcontainer);
