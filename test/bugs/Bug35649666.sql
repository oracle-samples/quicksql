
create table departments (
    department_id                  number generated by default on null as identity 
                                   --constraint departments_id_pk primary key,
                                   constraint departments_department_id_pk primary key,
    name                           varchar2(255 char) not null,
    location                       varchar2(4000 char),
    country                        varchar2(4000 char)
)
;

create table employees (
    employee_id                    number generated by default on null as identity 
                                   --constraint employees_id_pk primary key,
                                   constraint employees_employee_id_pk primary key,
    department_id                  number
                                   constraint employees_department_id_fk
                                   references departments ,
    name                           varchar2(50 char) not null,
    email                          varchar2(255 char),
    cost_center                    number,
    date_hired                     date,
    job                            varchar2(255 char)
)
;

-- table index
create index employees_i1 on employees (department_id);


-- triggers
create or replace trigger employees_biu
    before insert or update 
    on employees
    for each row
begin
    :new.email := lower(:new.email);
end employees_biu;
/


-- load data
 
insert into departments (
    department_id,
    name,
    location,
    country
) values (
    1,
    'Customer Satisfaction',
    'Tanquecitos',
    'United States'
);

insert into departments (
    department_id,
    name,
    location,
    country
) values (
    2,
    'Platform Solutions Architecture',
    'Sugarloaf',
    'United States'
);

commit;

alter table departments
modify department_id generated always /*by default on null*/ as identity restart start with 3;
 
-- load data
-- load data
 
insert into employees (
    employee_id,
    department_id,
    name,
    email,
    cost_center,
    date_hired,
    job
) values (
    1,
    2,
    'Gricelda Luebbers',
    'gricelda.luebbers@aaab.com',
    79,
    sysdate - 10,
    'Marketing Manager'
);

insert into employees (
    employee_id,
    department_id,
    name,
    email,
    cost_center,
    date_hired,
    job
) values (
    2,
    2,
    'Dean Bollich',
    'dean.bollich@aaac.com',
    73,
    sysdate - 68,
    'User Experience Manager'
);

insert into employees (
    employee_id,
    department_id,
    name,
    email,
    cost_center,
    date_hired,
    job
) values (
    3,
    2,
    'Milo Manoni',
    'milo.manoni@aaad.com',
    82,
    sysdate - 30,
    'Business Development Manager'
);

insert into employees (
    employee_id,
    department_id,
    name,
    email,
    cost_center,
    date_hired,
    job
) values (
    4,
    1,
    'Laurice Karl',
    'laurice.karl@aaae.com',
    97,
    sysdate - 68,
    'Legal Assistant'
);

commit;

alter table employees
modify employee_id generated always/*by default on null*/ as identity restart start with 5;
 
 
-- Generated by Quick SQL Thursday July 27, 2023  15:33:01
 
/*
departments /insert 2
   name /nn
   location
   country
   employees /insert 4
      name /nn vc50
      email /lower
      cost center num
      date hired
      job vc255
view emp_v departments employees

# settings = { semantics: "CHAR", language: "EN", APEX: true, prefixPKwithTname: true }
*/