import {toDDL, parsed} from "../src/ddl.js";

function assert( condition ) {
    if( !eval(condition) ) {
        console.error("Failed: "+condition);
        throw new Error('Test failed');
    }   
}

var output;
var output1;

export default function small_tests() {

    output = toDDL(   // 1.1.5 compatible but deprecated function call
        `departments
            name
# settings = {"prefix": "RIGHT"}  
        `, 
        '{"prefix": "WRONG"}'
    );

    assert( "0 < output.indexOf('create table right_departments')" );
    //                                         ^^^^     

    output = new parsed(
        `Bug35683432
            name
        `, 
        '{"notAnOption1": "should raise an Error"}'
    ).getDDL();
    assert( "0 < output.indexOf('Unknown setting: notanoption1')" );


    output = new parsed(
        `Bug35683432
            name
# settings = {"notAnOption2": "should raise an Error"}            ` 
    ).getDDL();
    assert( "0 < output.indexOf('Unknown setting: notanoption2')" );

    output = new parsed(
        `departments
            name
        # settings = {"genpk": false}            
        `
    ).getDDL();

    assert( "-1 == output.indexOf('ID     NUMBER GENERATED'.toLowerCase())" );
 
    output = new parsed(
        `departments
            name
        # settings = {genpk: false}            
        `
    ).getDDL();

    assert( "-1 == output.indexOf('ID     NUMBER GENERATED'.toLowerCase())" );
 
    // ddl.setOptionValue('genpk',false);
    output = new parsed(
        `departments
            name
        `,
        '{ "genpk": false }'
    ).getDDL();

    assert( "-1 == output.indexOf('ID     NUMBER GENERATED'.toLowerCase())" );

    output = new parsed(`
departments
    name
# settings = { "api": true }
`, '{ "api": false }').getDDL();

    assert( "0 < output.indexOf('DEPARTMENTS_API'.toLowerCase())" );

    output = new parsed(`
departments
        name
    # settings = { "Compress": "yEs" }
    `).getDDL();

    assert( "0 < output.indexOf(') compress;')" );
    
    output = new parsed(`
Bug35650456
    name  vc32k
    `).getDDL();

    assert( "0 < output.indexOf('name    varchar2(32767 char)')" );

    output = new parsed(`
Bug35668454
# settings = { drop: "Y"}
    `).getDDL();
           
    assert( "0 <= output.indexOf('drop table bug35668454')" ); 
    
    output = new parsed(`
Bugs35692739_35692703_35692625
   inventory json
   name vc50
   description vc(255)
   date_creation timestamp
   date_packed tstz
   date_production timestamp with local time zone
        `).getDDL();
                   
    assert( "0 < output.indexOf('clob check (inventory is json)')" );
    assert( "0 < output.indexOf('varchar2(50 char),')" );
    assert( "0 < output.indexOf('varchar2(255 char)')" );
    assert( "0 < output.indexOf('date_creation      timestamp,')" );
    assert( "0 < output.indexOf('date_packed        timestamp with time zone,')" );
    assert( "0 < output.indexOf('date_production    timestamp with local time zone')" );
    
    output = new parsed(`
Bug35683307 /insert 1
  # settings = { inserts: false}
            `).getDDL();

    assert( "-1 == output.indexOf('insert into')" );

    // NOTE: This test can't be performed anymore since it uses an internal method of ddl.js
    /*output = new parsed(`
ER_35698875 
      # settings = { inserts: false}
                `);
    
    assert( !ddl.appliedOptions['inserts'].value);*/
    //console.log(ddl.getOptionValue('inserts'));
    //console.log(ddl.appliedOptions['inserts'].value);

    output = new parsed(`
Bug_35683200 /insert 1
view bv Bug_35683200
# settings = { inserts: false}
# settings = { "schema": "HR"}
    `, '{"prefix": "The"}').getDDL();

    assert( "0 < output.indexOf('create table hr.the_Bug_35683200')" );
    assert( "0 < output.indexOf('replace view hr.the_bv')" );
    assert( "0 < output.indexOf('# settings = {\"inserts\":false,\"prefix\":\"The\",\"schema\":\"HR\"}')" );
    
    output = new parsed(`
Bug_35677264
   product
   amt number
   qty number

# settings = { PK: "GUID", semantics: "CHAR", language: "EN", APEX: true }
    `).getDDL();

    assert( "0 < output.indexOf('number default on null to_number(sys_guid(), ')" );
    assert( "0 < output.indexOf('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')" );
    
    output = new parsed(`
Bug_35677301

# settings = { semantics: "CHAR", auditCols: true, language: "EN", APEX: true, createdCol: "created_col", createdByCol: "created_by_col", updatedCol: "updated_col", updatedByCol: "updated_by_col" }
    `).getDDL();

    //console.log(output);
    assert( "0 < output.indexOf('created_col')" );
    assert( "0 < output.indexOf('created_by_col')" );
    assert( "0 < output.indexOf('updated_col')" );
    assert( "0 < output.indexOf('updated_by_col')" );

    output = new parsed(`
Bug35714241
    proficiency /check 'Test'
    `).getDDL();
    
    assert( "0 < output.indexOf(\"in ('Test'\")" );
   
    // 35714343
    output = new parsed(`
departments
    dname
    emp
        department_id /fk departments
        ename
    `).getDDL();
    
    assert( " output.indexOf('department_id    number') ==  output.lastIndexOf('department_id    number') " );

    // 35715610
    output = new parsed(`
dept
    dname
    emp /cascade
        dept_id
        ename
    `).getDDL();
    
    assert( "0 < output.indexOf('dept_id    number')" );
    assert( "0 < output.indexOf('constraint emp_dept_id_fk')" );
    assert( "0 < output.indexOf('references dept on delete cascade')" );

    // 35724078
    output = new parsed(`
dept
    name
    
    --- toDDL() second parameter:
    # settings = {"apex":"Y","api":"N","auditcols":"N","compress":"N","date":"DATE","db":"19c","drop":"N","editionable":"N","genpk":"Y","inserts":"Y","language":"EN","longvc":null,"pk":"IDENTITY","prefix":null,"prefixpkwithtname":"N","rowkey":"N","rowversion":"N","schema":null,"semantics":"CHAR","createdcol":"created","createdbycol":"created_by","updatedcol":"updated","updatedbycol":"updated_by"} 
    `,
    '{"apex":"Y","api":"N","auditcols":"N","compress":"N","date":"DATE","db":"19c","drop":"N","editionable":"N","genpk":"Y","inserts":"Y","language":"EN","longvc":null,"pk":"IDENTITY","prefix":null,"prefixpkwithtname":"N","rowkey":"N","rowversion":"N","schema":null,"semantics":"CHAR","createdcol":"created","createdbycol":"created_by","updatedcol":"updated","updatedbycol":"updated_by"}'
    ).getDDL();

    assert( "0 < output.indexOf('# settings = {\"apex\":\"Y\",\"db\":\"19c\"}')" );

    output = new parsed(`
dept /insert 5
    name
# inserts : N`,'{"inserts":"N"}').getDDL();

    assert( "0 > output.indexOf('# inserts : N')" );
    
    output = new parsed(`
Bug35737572
    flight_json json
    `).getDDL();

    assert( "0 < output.indexOf('clob check (flight_json is json)')" );
     
    output = new parsed(`
Bug35737578
    flight_file file
    `).getDDL();
   
    assert( "0 < output.indexOf('flight_file_filename')" );
         
    output = new parsed(`
bug35748389
    name
    
    # settings = {"pk":"NONE"}
    `).getDDL();
   
    assert( "output.indexOf('trigger') < 0" );
    assert( "0 < output.indexOf('constraint bug35748389_id_pk primary key,')" );
         
    output = new parsed(`
bug35748389_2
    name
    
    # settings = {"pk":"seq"}
    `).getDDL();
   
    assert( "output.indexOf('trigger') < 0" );
    assert( "0 < output.indexOf('number default on null bug35748389_2_seq.nextval')" );
    assert( "0 < output.indexOf('constraint bug35748389_2_id_pk primary key,')" );
         
    output = new parsed(
    `bug35748389_3
        name
    
    # settings = {"genpk":false}
    `).getDDL();
   
    assert( "output.indexOf('trigger') < 0" );
    assert( "output.indexOf('id') < 0" );
         
    output = new parsed(
    `bug35748389_4
        name
    
    # settings = {"pk":"identity"}
    `).getDDL();
   
    assert( "output.indexOf('trigger') < 0" );
    assert( "0 < output.indexOf('number generated by default on null as identity')" );
    assert( "0 < output.indexOf('constraint bug35748389_4_id_pk primary key,')" );
 
    output = new parsed(
    `Bug 35756025
    deptno                         num(2,0)  /nn /pk 
    dname                          vc(14) 
    loc                            vc(13) 
    `).getDDL();
       
    assert( "0 < output.indexOf('number(2,0) generated by default on null as identity')" );
    assert( "0 < output.indexOf('constraint bug_35756025_deptno_pk primary key,')" );

    output = new parsed(
    `Bug 35757130
    file_name                      vc(512) 
    file_mimetype                  vc(512) 
    file_charset                   vc(512) 
    file_lastupd                   date 
    file_blob                      blob 
    file_comments                  vc(4000) 
    tags          `).getDDL();
           
    assert( "0 < output.indexOf('file_name        varchar2(512 char),')" );
    assert( "output.indexOf('file_mimetype_mimetype') < 0" );
    assert( "output.indexOf('file_lastupd_filename') < 0" );
    
    output = new parsed(
    `Bug35737917 /auditcols
        name
    # settings = {"apex":"false"}
    `, '{"apex":"true"}').getDDL();
               
    //console.log(output);
    assert( "0 < output.indexOf(':new.created_by := user;')" );
    assert( "output.indexOf('APEX$SESSION') < 0" );

    output = new parsed(
    `Bug35757000 
            name
    # settings = {"overrideSettings":"true"}
    `, '{"prefix":"X"}').getDDL();
                   
    assert( "output.indexOf('x_') < 0" );
    
    output = new parsed(
    `Bug35650456_2
        job vc5000
    
    --- Non-default options:
    # settings = {"apex":"Y","db":"19c","longvc":"N"}
    `).getDDL();
             
    assert( " output.indexOf('Non-default options') ==  output.lastIndexOf('Non-default options') " );

    // Bug 35775121
    output = new parsed( 
`dept
    name

emp
    dept_id /cascade
    name
    `).getDDL();
                          
    assert( " 0 < output.indexOf('constraint emp_dept_id_fk') " );
    assert( " 0 < output.indexOf('references dept on delete cascade,') " );
    assert( " output.indexOf('dept_id    integer') < 0 " );
    
    output = new parsed( 
        `demo_item_order
            comment vc80`).getDDL();
                
    assert( " 0 < output.indexOf('the_comment') " );

    output = new parsed( 
`team_members /insert 1
    username /nn /upper
projects /insert 1
    name /nn
    project_lead /nn /references team_members`).getDDL();
                                      
    output = new parsed( 
`person
    id num /pk
    name vc40
    date_of_birth date
    mother /fk person
    father /fk person
    `).getDDL();
                                                  
    assert( " 0 < output.indexOf('id               number') " );    
    assert( " 0 < output.indexOf('person_id_pk primary key') " );    

    output = new parsed( 
`countries
    code vc2 /pk
    `).getDDL();
    assert( " 0 < output.indexOf('code    varchar2(2 char) not null') " ); 

    output = new parsed( 
`countries
    country_id vc2 /pk 
    `).getDDL();
    assert( " 0 < output.indexOf('country_id    varchar2(2 char) not null') " ); 
                    
    output = new parsed( 
`Bug35827840
    col1 vc
    `).getDDL();
        
    assert( " 0 < output.indexOf('col1    varchar2(4000 char)') " );     

    output = new parsed( 
`Bug35827927
    colstr string
    colvarchar varchar
    colvarchar2 varchar2
    colchar char
    `).getDDL();
                
    assert( " 0 < output.indexOf('colstr    ') " );                                     
    assert( " 0 < output.indexOf('colvarchar    ') " );                                     
    assert( " 0 < output.indexOf('colvarchar2    varchar2(4000 char)') " );                                     
    assert( " 0 < output.indexOf('colchar    ') " );   
    
    output = new parsed( 
`Bug35814922
    important_yn
    important1 yn
    important2 bool
    is_important
    `).getDDL();
                
    assert( " 0 < output.indexOf('important_yn    varchar2(1 char) constraint bug35814922_important_yn') " );                                     
    assert( " 0 < output.indexOf('important1      varchar2(1 char) constraint bug35814922_important1') " );                                     
    assert( " 0 < output.indexOf('important2      varchar2(1 char) constraint bug35814922_important2') " );    
    assert( " 0 < output.indexOf('is_important    varchar2(1 char) constraint bug35814922_is_important') " );    
    
    output = new parsed( 
`Bug35842845 
    ファーストネーム vc200 
    Das Gedöns	vc200 
    locatilon;drop user sys;
    country;shutdown abort;a  
    `).getDDL();
                    
    assert( " 0 < output.indexOf('\"ファーストネーム\"') " );                                     
    assert( " 0 < output.indexOf('\"Das Gedöns\"') " );                                     
    assert( " 0 < output.indexOf('\"locatilon;drop user sys;\"') " );                                     
    assert( " 0 < output.indexOf('\"country;shutdown abort;a\"') " ); 
    
    output = new parsed( 
        `"Test" 
            "CamelCase"
            x   [coMment]  
            2   --coMment2  
    `).getDDL();

    assert( " 0 < output.indexOf('create table \"Test\"') " );                                     
    assert( " 0 < output.indexOf('Test_id_pk') " );                                     
    assert( " 0 < output.indexOf('\"CamelCase\"') " );                                     
    assert( " 0 < output.indexOf('comment on column \"Test\".x is ') " );                                     
    assert( " 0 < output.indexOf('comment on column \"Test\".x2 is ') " );                                     
         
    // 35936560
    output = new parsed( 
    `mytable /rest
        name
    `).getDDL();
    assert( " output.indexOf('p_object')+5 < output.indexOf('MYTABLE') " );    
                                     
    output = new parsed( 
    `"yourTable" /rest
    name      
    `).getDDL();
    assert( " output.indexOf('p_object')+5 < output.lastIndexOf('yourTable') " ); 

    output = new parsed( 
    `customers
        cid /pk
    
    #settings = { pk: "SEQ"}      
        `).getDDL();
        
    assert( " 0 < output.indexOf('cid    number default on null customers_seq.nextval') " ); 
    assert( " output.indexOf('trigger') < 0 " ); 
                                            
    output = new parsed( 
    `customers
        id
    `).getDDL();
        
    //console.log(output);
    assert( " output.indexOf('id    varchar2') < 0 " ); 
}    


small_tests();