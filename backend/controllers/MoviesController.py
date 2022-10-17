#region Models
from pydantic import BaseModel

salas = []

class Video(BaseModel):   
    id: str
    nome : str
    link : str

class Sala(BaseModel):    
    id: str
    nome: str
        
    def add_video(self, salas):
        self.videos.append(salas)
#endregion

#region WEB API
from fastapi import FastAPI

app = FastAPI()

#CRUD de salas
#Create
@app.post("/salas/criar")
def criar_sala(sala: Sala):
    #Lógica para cadastrar uma sala 
    salas.append(sala)    
    return {"message": "Sala cadastrada com sucesso!",
            "Dados da sala": {
                "Id": sala.id,
                "Nome": sala.nome
            }}
    #return sala

#Read -> Sala específica pelo id
@app.get("/salas/{id_salas}")
def obter_sala_pelo_id(id_salas: str):
    #Lógica para consultar uma sala
    for i in range(len(salas)):            
        if salas[i].id == id_salas:
         return salas[i]#{"message": "Retornar informação da sala de id: " + id}
    return{"Status": 404, "Mensagem": "Sala não encontrada"}
        
       

#Read -> Todas as salas
@app.get("/salas")
def obter_salas():
    #Lógica para consultar uma sala    
    return salas#{f"message": "Retornar informação das salas cadastradas"}
    
#Update
@app.put("/salas/atualizar")
def atualizar_sala(sala: Sala):
    #Lógica para atualizar uma sala 
    return {"message": "Sala atualizada com sucesso!",
            "Dados da sala": {
                "Id": sala.id,
                "Nome": sala.nome
            }}

#Delete
@app.delete("/salas/delet_id")
def deletar_sala(id: str):
    #Lógica para deletar uma sala 
     for i in range(len(salas)):
        if salas[i].id == id:
         del salas[i]
         return {"message": "Sala de id: " + id + " excluída com sucesso!"}
     return{"Status": 404, "Mensagem": "Sala não encontrada"}#{"message": "Sala de id: " + id + " excluída com sucesso!"}

#endregion
