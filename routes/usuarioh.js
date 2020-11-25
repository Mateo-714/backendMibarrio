const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM usuario_habitante  ',(err,rows,fiels)=>{
    //si no hay error
        if(!err){
    //haga esto
    res.json(rows);
    }else{
        //si no (si hay un error)
        console.log(err);
    }//fin si
    });//fin query
    });//fin retorno de todos los estudiantes
    router.post('/nuevo-usuario',(req,res)=>{
        const {documento_id,nombre,contraseña,fecha_de_nacimiento}=req.body;
        
        let usuario =[documento_id,nombre,contraseña,fecha_de_nacimiento];
        
        let nuevoUsuario =`INSERT INTO usuario_habitante(documento_id,nombre,contraseña,fecha_de_nacimiento)
        VALUES(?,?,?,?)`;
        mysqlConnection.query(nuevoUsuario,usuario,(err,results,fields)=>{
        if(err){
           return console.error(err.message());
        }else{
           res.json({message:'Usuario registrado'})
        }
        })});
        router.post('/actualizar-usuario',(req,res)=>{
            const {documento_id,nombre,contraseña,fecha_de_nacimiento}=req.body;
            
            
            mysqlConnection.query('UPDATE usuario_habitante SET documento_id=?,nombre=?,contraseña=?,fecha_de_nacimiento=?',
            [documento_id,nombre,contraseña,fecha_de_nacimiento],(err,rows,fields)=>{
            if(!err){
               
               res.json({status:'usuario actualizado'});
            }else{
               console.log(err);
              
            }
            })});
    
module.exports =router;