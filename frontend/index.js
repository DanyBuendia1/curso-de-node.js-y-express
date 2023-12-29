const formget = document.getElementById('getusuario');
const formpost = document.getElementById('postusuario');
const formput = document.getElementById('putusuario');
const formdelete = document.getElementById('deleteusuario');

formget.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let message =''
    const id = e.target.id.value;

    await fetch(`http://localhost:3000/user/${id}`).then((response)=>response.json()).then((data)=>{
    if(data.message)
    {
        message = data.message
    }    
    else
    {
        message = `ID: ${data.id} | Nombre: ${data.nombre} | Apellido: ${data.apellido} | Edad: ${data.edad}`;
    }
});
    document.getElementById('textoget').innerHTML = message;
});

formpost.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const edad = e.target.edad.value;

    let message = ''

    await fetch(`http://localhost:3000/user/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre: nombre, apellido: apellido, edad: edad}),
    })

    .then((response)=> response.json())
    .then((data)=>{
        message = data.message;
    });

    document.getElementById('textopost').innerHTML=message;
    console.log('POST', nombre, edad, edad);
});

formput.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const id = e.target.id.value;
    const nombre= e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const edad = e.target.edad.value;

    let message = ''

    await fetch(`http://localhost:3000/user/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre: nombre, apellido: apellido, edad: edad}),
    })

    .then((response)=>response.json())
    .then((data)=>{
        message = data.message;
    })
    document.getElementById('textoput').innerHTML = message;

    console.log('PUT', id,nombre,apellido,edad);
});

formdelete.addEventListener('submit',async (e)=>{
    e.preventDefault();

    const id = e.target.id.value;
    let message = '';

    await fetch(`http://localhost:3000/user/${id}`,{
        method:'DELETE',
    })
    .then((response)=>response.json())
    .then((data)=>{
        

        if(data.message)
    {
        message = data
    }    
    else
    {
        message = 'Registro eliminado';
    }
    });
    document.getElementById('textodelete').innerHTML = message;
})

let horayfecha = ()=>{
    let hoy = new Date();
    console.log(hoy)
}
horayfecha()