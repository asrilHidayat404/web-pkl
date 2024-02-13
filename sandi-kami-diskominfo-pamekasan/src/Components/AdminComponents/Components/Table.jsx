import DataTable from 'react-data-table-component';
import axios from 'axios'
const Table = ({pengaju}) => {
    const del = (id) => {
        let conf = window.confirm("Apakah anda ingin menghapus")
        if (!conf) {
            return
        } else {
            axios.delete(`http://localhost:3001/pengaju/hapus/${id}`)
            .then(response => {
                alert("Pengaju berhasil dihapus");
                window.location.reload()
            })
            .catch(error => {
                console.error('Gagal menghapus pengaju', error);
                alert("Gagal menghapus pengaju");
            });
        }
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().substring(0, 10); // Mengambil substring dari indeks 0 hingga 9 (10 karakter)
    };
    const columns = [
        {
            name: 'No',
            selector: (row, index) => index + 1 +'.',
            width: "70px"
        },
        {
            name: 'Nama',
            selector: row => row.nama,
        },
        {
            name: 'Email',
            selector: row => row.email,
            minWidth: "200px"
        },
        {
            name: 'Nomor WA',
            selector: row => row.nomorWA,
            minWidth: "160px"
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'NIP',
            selector: row => row.nip ? row.nip : "-",
            minWidth: "160px"
        },
        {
            name: 'Jabatan',
            selector: row => row.jabatan ? row.jabatan : "-",
            minWidth: "200px"
        },
        {
            name: 'Tanggal Pengajuan',
            selector: row => row.waktuPengajuan,
        },
        {
            name: 'Waktu Pengajuan',
            selector: row => formatDate(row.tglPengajuan),
        },
        {
            name: 'Formulir',
            selector: row => <img src={`http://localhost:3001/images/${row.gambarFormulir}`} alt="Gambar" />,
        },
        {
            name: '',
            selector: row => <svg onClick={() => del(row.id)} class="w-6 h-6 text-slate-500 cursor-pointer dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
          </svg>
        }
    ];
    const empty = (<div style={{padding: "20px 0"}}>Belum Ada Pengaju</div>)
    const data = pengaju
    return (
        <DataTable
			columns={columns}
			data={data}
            pagination
            noDataComponent={empty}
		/>
    )
}

export default Table