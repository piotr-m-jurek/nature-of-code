# Vectors

> basic of vectors, how is it done in Processing,
> i created helper class called Vector, and I'll keep adding functions to it

2. vector is a class in processing with bunch of methods written for it.
it just holds 3D values about the force/object/speed etc.

3. addition 
  ```
    v + w = ((v.x +w.x), (v.y + w.y))
  ```

4. subtraction
  ```
    v - w = ((v.x -w.x), (v.y - w.y))
  ```

5. multiplication by value
  ```
    v * m = ((v.x * m), (v.y * m))
  ```

6. normalization is just creating `unit vector`: bringin vector magnitude to 1

7. Motion 101

- add _velocity_ to _location_
- draw **object** at _location_

8. Mover's acceleration
  acceleration is a force (another vector) working on a Mover. It is normalized, and determines the direction in which the object is moving.
  in the end motion changes
  - add _acceleration_ to _velocity_
  - limit _velocity_ to it's _max speed_
  - add _velocity_ to _location_
  - draw **object** at _location_

9. _static_ functions
Static function calls are made directly on a class and not on it's instance. Often created as helper functions:
- declaration
``` javascript
  class Triple {

    static triple(n) {
      if(n == null) {
        return n * 3
      }
    }

  }

  class BiggerTriple extends Triple {

    static triple (n) {
      return super.triple(n) * super.triple(n)
    }
  
  }
```
- call
``` javascript
  const triple2 = Triple.triple(2)
  const sqTriple2 = BiggerTriple.triple(2)

  console.log(triple2) // logs 6
  console.log(sqTriple2) // logs 36
```

10. Acceleration towards the mouse
Just update acceleration to be normalized vector from current position to mouse position, needs helper function

```
getMousePos(event, canvas)
```
