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

* add _velocity_ to _location_
* draw **object** at _location_

8. Mover's acceleration
