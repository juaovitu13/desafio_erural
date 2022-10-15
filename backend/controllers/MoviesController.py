from fastapi import FastAPI

app = FastAPI()


#CRUD de salas

#Create
@app.post("/salas")
def hello_root():
    
    #Lógica para cadastrar uma sala    
    return {"message": "Sala cadastrada com sucesso!"}

#Read
@app.get("/salas")
def hello_root():
    
    #Lógica para consultar uma sala    
    return {"message": "Retornar informação das salas cadastradas"}

#Update
@app.put("/salas")
def hello_root():
    
    #Lógica para atualizar uma sala 
    return {"message": "Sala atualizada com sucesso!"}

#Delete
@app.delete("/salas")
def hello_root():
    
    #Lógica para deletar uma sala 
    return {"message": "Sala excluída com sucesso"}
