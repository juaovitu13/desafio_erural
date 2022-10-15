from models import Sala
from typing import List

class SalasRepository:
     
    salas = []
    
    def add(self, sala: Sala):
        self.salas.append(sala)
        
    def update(self, sala: Sala):
        self.salas.append(sala)
    
    def getById(self, id)-> Sala: 
        self.salas.remove(id)
    
    def getAll(self): 
        return self.salas
    
    def delete(self, id):
        self.salas.remove(id)