//import react table hook
import { useTable } from "react-table";

const data = [
  {
    id: 1,
    first_name: "Donovan",
    last_name: "Ploughwright",
    email: "dploughwright0@hostgator.com",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Penni",
    last_name: "Treverton",
    email: "ptreverton1@prweb.com",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Winnie",
    last_name: "Booi",
    email: "wbooi2@utexas.edu",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Gregoire",
    last_name: "Pepler",
    email: "gpepler3@rediff.com",
    gender: "Male",
  },
  {
    id: 5,
    first_name: "Sinclare",
    last_name: "Pantry",
    email: "spantry4@sina.com.cn",
    gender: "Male",
  },
  {
    id: 6,
    first_name: "Gnni",
    last_name: "Rubinovici",
    email: "grubinovici5@msn.com",
    gender: "Female",
  },
  {
    id: 7,
    first_name: "Tatiania",
    last_name: "Briand",
    email: "tbriand6@umich.edu",
    gender: "Genderfluid",
  },
  {
    id: 8,
    first_name: "Kendra",
    last_name: "Emmins",
    email: "kemmins7@shareasale.com",
    gender: "Female",
  },
  {
    id: 9,
    first_name: "Shaylah",
    last_name: "Dollimore",
    email: "sdollimore8@newyorker.com",
    gender: "Female",
  },
  {
    id: 10,
    first_name: "Michelle",
    last_name: "Caswell",
    email: "mcaswell9@printfriendly.com",
    gender: "Female",
  },
  {
    id: 11,
    first_name: "Shandie",
    last_name: "Waliszewski",
    email: "swaliszewskia@woothemes.com",
    gender: "Female",
  },
  {
    id: 12,
    first_name: "Noellyn",
    last_name: "Dunlea",
    email: "ndunleab@reuters.com",
    gender: "Female",
  },
  {
    id: 13,
    first_name: "My",
    last_name: "Allery",
    email: "malleryc@time.com",
    gender: "Genderfluid",
  },
  {
    id: 14,
    first_name: "Dino",
    last_name: "Onthank",
    email: "donthankd@elpais.com",
    gender: "Male",
  },
  {
    id: 15,
    first_name: "Phaedra",
    last_name: "Teape",
    email: "pteapee@github.io",
    gender: "Female",
  },
  {
    id: 16,
    first_name: "Terrel",
    last_name: "Maidlow",
    email: "tmaidlowf@dmoz.org",
    gender: "Male",
  },
  {
    id: 17,
    first_name: "Gaylord",
    last_name: "Brecknall",
    email: "gbrecknallg@google.ca",
    gender: "Male",
  },
  {
    id: 18,
    first_name: "Traci",
    last_name: "Maes",
    email: "tmaesh@fda.gov",
    gender: "Female",
  },
  {
    id: 19,
    first_name: "Mill",
    last_name: "Ivankovic",
    email: "mivankovici@canalblog.com",
    gender: "Genderqueer",
  },
  {
    id: 20,
    first_name: "Adorne",
    last_name: "Yemm",
    email: "ayemmj@ft.com",
    gender: "Female",
  },
  {
    id: 21,
    first_name: "Annaliese",
    last_name: "Davenhill",
    email: "adavenhillk@163.com",
    gender: "Female",
  },
  {
    id: 22,
    first_name: "Raphaela",
    last_name: "Marcham",
    email: "rmarchaml@tuttocitta.it",
    gender: "Female",
  },
  {
    id: 23,
    first_name: "Cassius",
    last_name: "Esselin",
    email: "cesselinm@cbsnews.com",
    gender: "Male",
  },
  {
    id: 24,
    first_name: "Rooney",
    last_name: "Dykes",
    email: "rdykesn@fastcompany.com",
    gender: "Polygender",
  },
  {
    id: 25,
    first_name: "Monte",
    last_name: "Ruckert",
    email: "mruckerto@google.it",
    gender: "Male",
  },
  {
    id: 26,
    first_name: "Rudyard",
    last_name: "Brownill",
    email: "rbrownillp@salon.com",
    gender: "Male",
  },
  {
    id: 27,
    first_name: "Rockwell",
    last_name: "Puckring",
    email: "rpuckringq@uol.com.br",
    gender: "Male",
  },
  {
    id: 28,
    first_name: "Estelle",
    last_name: "Menichi",
    email: "emenichir@google.cn",
    gender: "Female",
  },
  {
    id: 29,
    first_name: "Adolphus",
    last_name: "Corke",
    email: "acorkes@ask.com",
    gender: "Male",
  },
  {
    id: 30,
    first_name: "Moise",
    last_name: "Shepherd",
    email: "mshepherdt@behance.net",
    gender: "Male",
  },
  {
    id: 31,
    first_name: "Claybourne",
    last_name: "Biddulph",
    email: "cbiddulphu@mapy.cz",
    gender: "Male",
  },
  {
    id: 32,
    first_name: "Heida",
    last_name: "Glowacki",
    email: "hglowackiv@omniture.com",
    gender: "Female",
  },
  {
    id: 33,
    first_name: "Matthus",
    last_name: "Steutly",
    email: "msteutlyw@tiny.cc",
    gender: "Male",
  },
  {
    id: 34,
    first_name: "Ulrica",
    last_name: "Dray",
    email: "udrayx@friendfeed.com",
    gender: "Polygender",
  },
  {
    id: 35,
    first_name: "Nanon",
    last_name: "MacEllen",
    email: "nmacelleny@accuweather.com",
    gender: "Non-binary",
  },
  {
    id: 36,
    first_name: "Cornelius",
    last_name: "Panchin",
    email: "cpanchinz@macromedia.com",
    gender: "Male",
  },
  {
    id: 37,
    first_name: "Jakob",
    last_name: "Jacquet",
    email: "jjacquet10@dmoz.org",
    gender: "Male",
  },
  {
    id: 38,
    first_name: "Johan",
    last_name: "Billsberry",
    email: "jbillsberry11@nba.com",
    gender: "Male",
  },
  {
    id: 39,
    first_name: "Genna",
    last_name: "Beatey",
    email: "gbeatey12@microsoft.com",
    gender: "Female",
  },
  {
    id: 40,
    first_name: "Dov",
    last_name: "Fauguel",
    email: "dfauguel13@altervista.org",
    gender: "Male",
  },
  {
    id: 41,
    first_name: "Velvet",
    last_name: "Shepstone",
    email: "vshepstone14@taobao.com",
    gender: "Female",
  },
  {
    id: 42,
    first_name: "Kylynn",
    last_name: "Crosdill",
    email: "kcrosdill15@umn.edu",
    gender: "Agender",
  },
  {
    id: 43,
    first_name: "Auberon",
    last_name: "Mildenhall",
    email: "amildenhall16@biblegateway.com",
    gender: "Male",
  },
  {
    id: 44,
    first_name: "Cecilia",
    last_name: "Farfolomeev",
    email: "cfarfolomeev17@mashable.com",
    gender: "Female",
  },
  {
    id: 45,
    first_name: "Waldemar",
    last_name: "Hookes",
    email: "whookes18@sohu.com",
    gender: "Male",
  },
  {
    id: 46,
    first_name: "Esdras",
    last_name: "Hoggan",
    email: "ehoggan19@tuttocitta.it",
    gender: "Male",
  },
  {
    id: 47,
    first_name: "Dolph",
    last_name: "Glasspoole",
    email: "dglasspoole1a@buzzfeed.com",
    gender: "Male",
  },
  {
    id: 48,
    first_name: "Giffy",
    last_name: "MacKniely",
    email: "gmackniely1b@cargocollective.com",
    gender: "Male",
  },
  {
    id: 49,
    first_name: "Brita",
    last_name: "Tarr",
    email: "btarr1c@123-reg.co.uk",
    gender: "Female",
  },
  {
    id: 50,
    first_name: "Desmond",
    last_name: "Petr",
    email: "dpetr1d@ucsd.edu",
    gender: "Bigender",
  },
];

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Emails",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
];

const ReactTable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="contianer">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hGroup, i) => (
            <tr {...hGroup.getHeaderGroupProps()} key={i}>
              {hGroup.headers.map((header, i) => (
                <th {...header.getHeaderProps()} key={i}>
                  {header.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* table body */}
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, i) => (
                  <td {...cell.getCellProps()} key={i}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReactTable;
