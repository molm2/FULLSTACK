Mario Olmeño
<div style="text-align:center">
    <h1><strong>CHECKPOINT 6</h1></strong>
</div>

<div style="text-align:center">
    <h2><strong>EJERCICIO PRÁCTICO</strong></h2>

1-Crea una clase de Python llamada Usuario que use el método init y cree un nombre de usuario y una contraseña. Crea un objeto usando la clase.


```python
class Usuario():
   def __init__(self,nombre,contraseña):
    self.nombre= nombre
    self.contraseña=contraseña

usuario1 = Usuario("Cervantes","DonQuijote") 
print(usuario1.nombre)
print(usuario1.contraseña)
```

    Cervantes
    DonQuijote
    
