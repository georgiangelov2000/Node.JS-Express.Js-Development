const express=require('express');
const route=express.Router();
let accounts=require('./database');

route.get('/accounts',(req,res)=>{
    res.json({
        userData: accounts
    })
})

route.post('/accounts',(req,res)=>{
    const incomingAccount=req.body
    accounts.push(incomingAccount)
    res.json(accounts)
})

route.get('/accounts/:id',(req,res)=>{
    const accountId=Number(req.params.id)
    const getAccount=accounts.find((account)=>account.id===accountId)
    if(!getAccount){
        res.status(500).send('Account not found')
    }else{
        res.json({userData:[getAccount]});
    }
})

route.put('/accounts/:id',(req,res)=>{
    const accountId=Number(req.params.id)
    const body=req.body
    const account=accounts.find((account)=>account.id===accountId)
    const index=accounts.indexOf(account)

    if(!account){
        res.status(500).send('Account not found')
    }else{
        const UpdatedAccount={
            ...account, ...body
        }
        account[index]=UpdatedAccount
        res.send(UpdatedAccount)
    }
})

route.delete('/accounts/:id',(req,res)=>{
    const accountId=Number(req.params.id);
    const newAccounts=accounts.filter((account)=>account.id!=accountId)

    if(!newAccounts){
        res.status(500).send('Account not found')
    }else{
        accounts=newAccounts
        res.send(accounts)
    }
})

module.exports=route;
