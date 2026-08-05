 CREATE TABLE IF NOT EXISTS employees
         (
         id serial not null
         constraint employees_pk primary key,
         name text,
         license_plate text
         );

         ALTER TABLE employees OWNER to "{{ custom_user }}";
         CREATE UNIQUE index IF NOT EXISTS employees_id_uindex on employees (id);

         INSERT INTO public.employees (id, name, license_plate) VALUES (1, 'John B.', 'DB124GR') ON CONFLICT DO NOTHING;
         INSERT INTO public.employees (id, name, license_plate) VALUES (2, 'Jill J.', 'VG645PH') ON CONFLICT DO NOTHING;
         INSERT INTO public.employees (id, name, license_plate) VALUES (3, 'Phil K.', 'GG322GG') ON CONFLICT DO NOTHING;