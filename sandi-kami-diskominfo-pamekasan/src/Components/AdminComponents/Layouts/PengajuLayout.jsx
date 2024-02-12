import Table from "../Components/Table"
import ExcelJS from "exceljs"

const PengajuLayout = ({pengaju}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().substring(0, 10); // Mengambil substring dari indeks 0 hingga 9 (10 karakter)
    };
    const exportToExcel = () => {
        let number = 1
        const toDataURL = (url) => {
          const promise = new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
              var reader = new FileReader();
              reader.readAsDataURL(xhr.response);
              reader.onloadend = function () {
                resolve({ base64Url: reader.result });
              };
            };
            xhr.open("GET", url);
            xhr.responseType = "blob";
            xhr.send();
          });
        
          return promise;
        };
    
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet("My Sheet");
        sheet.properties.defaultRowHeight = 80;
        sheet.getRow(1).border = {
          top: { style: "thick", color: { argb: "FFFF0000" } },
          left: { style: "thick", color: { argb: "000000FF" } },
          bottom: { style: "thick", color: { argb: "F08080" } },
          right: { style: "thick", color: { argb: "FF00FF00" } },
        };
    
        sheet.getRow(1).fill = {
          type: "pattern",
          pattern: "darkVertical",
          fgColor: { argb: "FFFF00" },
        };
    
        sheet.getRow(1).font = {
          name: "Arial",
          family: 4,
          size: 15,
          bold: true,
        };
        sheet.columns = [
          {
            header: "No",
            key: "no",
            width: 10,
          },
          { header: "Nama", 
            key: "nama", 
            width: 30 },
          {
            header: "Email",
            key: "email",
            width: 30,
          },
          {
            header: "Nomor WA",
            key: "nomorWA",
            width: 30,
          },
          {
            header: "Status",
            key: "status",
            width: 30,
          },
          {
            header: "NIP",
            key: "nip",
            width: 30,
          },
          {
            header: "Jabatan",
            key: "jabatan",
            width: 30,
          },
          {
            header: "Tanggal",
            key: "tglPengajuan",
            width: 30,
          },
          {
            header: "Waktu",  
            key: "waktuPengajuan",
            width: 30,
          },
          {
            header: "Formulir",
            width: 30,
          },
        ];
        const promise = Promise.all(
          pengaju?.map(async (pengaju, index) => {
            const rowNumber = index + 1
            sheet.addRow({
              no: `${number++}.`,
              nama: pengaju?.nama,
              nomorWA: pengaju?.nomorWA,
              email: pengaju?.email,
              status: pengaju?.status,
              nip: pengaju?.nip ? pengaju.nip : "-",
              jabatan: pengaju?.jabatan ? pengaju.jabatan : "-",
              tglPengajuan: formatDate(pengaju?.tglPengajuan),
              waktuPengajuan: pengaju?.waktuPengajuan
            });
    
            const result = await toDataURL(`http://localhost:3001/images/${pengaju.gambarFormulir}`)
            const splitted = pengaju?.gambarFormulir.split(".")
            const extName = splitted[splitted.length - 1]
    
            const imgId = workbook.addImage({
              base64: result.base64Url,
              extension: extName
            })
    
            sheet.addImage(imgId, {
              tl: {col: 9, row: rowNumber},
              ext: {width: 100, height: 100}
            })
          })
        )
        promise.then(() => {
            workbook.xlsx.writeBuffer().then(function (data) {
              const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              });
              const url = window.URL.createObjectURL(blob);
              const anchor = document.createElement("a");
              anchor.href = url;
              anchor.download = "download.xlsx";
              anchor.click();
              window.URL.revokeObjectURL(url);
            });
        })
      }
    return (
        <div className="container px-6 py-8 mx-auto">
          <h3 className="text-3xl font-medium text-gray-700">Pengaju</h3>
          <div className="text-right">
            <button className=" p-2 bg-green-700 rounded-lg text-white font-bold" onClick={exportToExcel}>Export to Excel</button>
          </div>
          <div className="mt-8"></div>
          <div className="flex flex-col mt-8">
            <Table pengaju={pengaju}/>
          </div>
        </div>
    )
}

export default PengajuLayout