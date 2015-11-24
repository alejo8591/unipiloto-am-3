var the_entry;
var the_entries;
var the_file_system;
var br = '<br />';
var hr = '<hr />';
var start_p = '<p>';
var end_p = '</p>';

function createRandomStory(num_words) {
  var tmp_str = "";
  for(var i = 0; i < num_words; i++) {
    tmp_str += createRandomString(Math.floor(Math.random() * 10)) + " ";
  }
  return tmp_str;
}

function createRandomString(num_chars) {
  var chars = "abcdefghiklmnopqrstuvwxyz";
  var tmp_str = "";
  for(var i = 0; i < num_chars; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    tmp_str += chars.substring(rnum, rnum + 1);
  }
  return tmp_str;
}

function processDir(fyle_system_type) {
  alert("processDir: " + fyle_system_type);
  window.requestFileSystem(fyle_system_type, 1024 * 1024, onGetFileSystemSuccess, onFileError);
}

function onGetFileSystemSuccess(fs) {
  alert("onGetFileSystemSuccess: " + fs.name);
  the_file_system = fs;
  var dr = fs.root.createReader();
  dr.readEntries(onDirReaderSuccess, onFileError);
}

function onDirReaderSuccess(dir_entries) {
  alert("onDirReaderSuccess (" + dir_entries.length + ")");

  $('#dirEntries').empty();

  the_entries = dir_entries;
  var i, fl, len;
  len = the_entries.length;
  if(len > 0) {
    fl = '<ul data-role="listview" id="dirEntryList">';
    for( i = 0; i < len; i++) {
      if(the_entries[i].isDirectory == true) {
        fl += '<li><a href="#" onclick="processEntry(' + i + ');">Directorio: ' + the_entries[i].name + '</a></li>';
      } else {
        fl += '<li><a href="#" onclick="processEntry(' + i + ');">Archivo: ' + the_entries[i].name + '</a></li>';
      }
    }
    fl += "</ul>";

    $('#dirEntries').html(fl);

    $('#dirEntryList').trigger('create');
  } else {
    fl = "<p>No Existen Archivos</p>";
    $('#dirEntries').html(fl);
  }

  $('#writeInfo').empty();

  $.mobile.changePage("#dirList", "slide", false, true);
}

function processEntry(entry_index) {

  $('#writeInfo').empty();

  the_entry = the_entries[entry_index];

  var fi = "";
  fi += start_p + '<b>Name</b>: ' + the_entry.name + end_p;
  fi += start_p + '<b>Full Path</b>: ' + the_entry.fullPath + end_p;
  // fi += start_p + '<b>URI</b>: ' + the_entry.toURI() + end_p;
  if(the_entry.isFile == true) {
    fi += start_p + 'La entrada es un archivo' + end_p;
  } else {
    fi += start_p + 'La entrada es un directorio' + end_p;
  }

  $('#fileInfo').html(fi);

  $.mobile.changePage("#fileDetails", "slide", false, true);

  the_entry.getMetadata(onGetMetadataSuccess, onFileError);
}

function onGetMetadataSuccess(meta_data) {
  // alert("onGetMetadataSuccess");
  var md = '';
  for(aKey in meta_data) {
    md += '<b>' + aKey + '</b>: ' + meta_data[aKey] + br;
  }
  md += hr;

  $('#fileMetadata').html(md);
}

function writeFile() {

  var the_file_name = createRandomString(8) + '.txt';
  alert("writeFile: " + the_file_name);
  the_file_system.root.getFile(the_file_name, {
    create : true
  }, onGetFileSuccess, onFileError);
}

function onGetFileSuccess(the_file) {
  alert("onGetFileSuccess: " + the_file.name);
  the_file.createWriter(onCreateWriterSuccess, onFileError);
}

function onCreateWriterSuccess(writer) {
  alert("onCreateWriterSuccess");

  writer.onwritestart = function(e) {
    console.log("Write start");
  };

  writer.onwriteend = function(e) {
    console.log("Write end");
  };

  writer.onwrite = function(e) {
    console.log("Write completed");
  };

  writer.onerror = function(e) {
    console.log("Write error: " + e.toString() + br);
  };
  writer.write("Archivo Creado por el Lab14: ");
  writer.write("Esto es otra linea de Texto ");
  writer.write(createRandomStory(25));
}

function removeFile() {
  the_entry.remove(onRemoveFileSuccess, onFileError);
}

function onRemoveFileSuccess(entry) {
  alert("Eliminado Correctamente " + entry.name);
}

function viewFile() {
  $('#viewFileName').html('<h1>' + the_entry.name + '</h1>');

  $.mobile.changePage("#viewFile", "slide", false, true);
  the_entry.file(onFileReaderSuccess, onFileError);
}

function onFileReaderSuccess(file) {
  var reader = new FileReader();

  reader.onloadend = function(e) {
    $('#readInfo').append("Carga Finalizada" + br);
    $('#fileContents').text(e.target.result);
  };

  reader.onloadstart = function(e) {
    $('#readInfo').append("Carga Inicializada" + br);
  };

  reader.onloaderror = function(e) {
    $('#readInfo').append("Cargando Error :( " + e.target.error.code + br);
  };

  reader.readAsText(file);
}

function onFileError(e) {
  var msgText;
  switch(e.code) {
    case FileError.NOT_FOUND_ERR:
      msgText = "File not found error.";
      break;
    case FileError.SECURITY_ERR:
      msgText = "Security error.";
      break;
    case FileError.ABORT_ERR:
      msgText = "Abort error.";
      break;
    case FileError.NOT_READABLE_ERR:
      msgText = "Not readable error.";
      break;
    case FileError.ENCODING_ERR:
      msgText = "Encoding error.";
      break;
    case FileError.NO_MODIFICATION_ALLOWED_ERR:
      msgText = "No modification allowed.";
      break;
    case FileError.INVALID_STATE_ERR:
      msgText = "Invalid state.";
      break;
    case FileError.SYNTAX_ERR:
      msgText = "Syntax error.";
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msgText = "Invalid modification.";
      break;
    case FileError.QUOTA_EXCEEDED_ERR:
      msgText = "Quote exceeded.";
      break;
    case FileError.TYPE_MISMATCH_ERR:
      msgText = "Type mismatch.";
      break;
    case FileError.PATH_EXISTS_ERR:
      msgText = "Path exists error.";
      break;
    default:
      msgText = "Unknown error.";
    }

    navigator.notification.alert(msgText, null, "File Error");
  }
