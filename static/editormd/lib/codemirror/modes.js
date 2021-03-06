/*! Editor.md v1.5.0 | modes.min.js | Open source online markdown editor. | MIT License | By: Pandao | https://github.com/pandao/editor.md | 2015-06-09 */
!
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.modeInfo = [{
        name: "APL",
        mime: "text/apl",
        mode: "apl",
        ext: ["dyalog", "apl"]
    },
    {
        name: "Asterisk",
        mime: "text/x-asterisk",
        mode: "asterisk",
        file: /^extensions\.conf$/i
    },
    {
        name: "C",
        mime: "text/x-csrc",
        mode: "clike",
        ext: ["c", "h"]
    },
    {
        name: "C++",
        mime: "text/x-c++src",
        mode: "clike",
        ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
        alias: ["cpp"]
    },
    {
        name: "Cobol",
        mime: "text/x-cobol",
        mode: "cobol",
        ext: ["cob", "cpy"]
    },
    {
        name: "C#",
        mime: "text/x-csharp",
        mode: "clike",
        ext: ["cs"],
        alias: ["csharp"]
    },
    {
        name: "Clojure",
        mime: "text/x-clojure",
        mode: "clojure",
        ext: ["clj"]
    },
    {
        name: "CoffeeScript",
        mime: "text/x-coffeescript",
        mode: "coffeescript",
        ext: ["coffee"],
        alias: ["coffee", "coffee-script"]
    },
    {
        name: "Common Lisp",
        mime: "text/x-common-lisp",
        mode: "commonlisp",
        ext: ["cl", "lisp", "el"],
        alias: ["lisp"]
    },
    {
        name: "Cypher",
        mime: "application/x-cypher-query",
        mode: "cypher",
        ext: ["cyp", "cypher"]
    },
    {
        name: "Cython",
        mime: "text/x-cython",
        mode: "python",
        ext: ["pyx", "pxd", "pxi"]
    },
    {
        name: "CSS",
        mime: "text/css",
        mode: "css",
        ext: ["css"]
    },
    {
        name: "CQL",
        mime: "text/x-cassandra",
        mode: "sql",
        ext: ["cql"]
    },
    {
        name: "D",
        mime: "text/x-d",
        mode: "d",
        ext: ["d"]
    },
    {
        name: "Dart",
        mimes: ["application/dart", "text/x-dart"],
        mode: "dart",
        ext: ["dart"]
    },
    {
        name: "diff",
        mime: "text/x-diff",
        mode: "diff",
        ext: ["diff", "patch"]
    },
    {
        name: "Django",
        mime: "text/x-django",
        mode: "django"
    },
    {
        name: "Dockerfile",
        mime: "text/x-dockerfile",
        mode: "dockerfile",
        file: /^Dockerfile$/
    },
    {
        name: "DTD",
        mime: "application/xml-dtd",
        mode: "dtd",
        ext: ["dtd"]
    },
    {
        name: "Dylan",
        mime: "text/x-dylan",
        mode: "dylan",
        ext: ["dylan", "dyl", "intr"]
    },
    {
        name: "EBNF",
        mime: "text/x-ebnf",
        mode: "ebnf"
    },
    {
        name: "ECL",
        mime: "text/x-ecl",
        mode: "ecl",
        ext: ["ecl"]
    },
    {
        name: "Eiffel",
        mime: "text/x-eiffel",
        mode: "eiffel",
        ext: ["e"]
    },
    {
        name: "Embedded Javascript",
        mime: "application/x-ejs",
        mode: "htmlembedded",
        ext: ["ejs"]
    },
    {
        name: "Embedded Ruby",
        mime: "application/x-erb",
        mode: "htmlembedded",
        ext: ["erb"]
    },
    {
        name: "Erlang",
        mime: "text/x-erlang",
        mode: "erlang",
        ext: ["erl"]
    },
    {
        name: "Forth",
        mime: "text/x-forth",
        mode: "forth",
        ext: ["forth", "fth", "4th"]
    },
    {
        name: "Fortran",
        mime: "text/x-fortran",
        mode: "fortran",
        ext: ["f", "for", "f77", "f90"]
    },
    {
        name: "F#",
        mime: "text/x-fsharp",
        mode: "mllike",
        ext: ["fs"],
        alias: ["fsharp"]
    },
    {
        name: "Gas",
        mime: "text/x-gas",
        mode: "gas",
        ext: ["s"]
    },
    {
        name: "Gherkin",
        mime: "text/x-feature",
        mode: "gherkin",
        ext: ["feature"]
    },
    {
        name: "GitHub Flavored Markdown",
        mime: "text/x-gfm",
        mode: "gfm",
        file: /^(readme|contributing|history).md$/i
    },
    {
        name: "Go",
        mime: "text/x-go",
        mode: "go",
        ext: ["go"]
    },
    {
        name: "Groovy",
        mime: "text/x-groovy",
        mode: "groovy",
        ext: ["groovy"]
    },
    {
        name: "HAML",
        mime: "text/x-haml",
        mode: "haml",
        ext: ["haml"]
    },
    {
        name: "Haskell",
        mime: "text/x-haskell",
        mode: "haskell",
        ext: ["hs"]
    },
    {
        name: "Haxe",
        mime: "text/x-haxe",
        mode: "haxe",
        ext: ["hx"]
    },
    {
        name: "HXML",
        mime: "text/x-hxml",
        mode: "haxe",
        ext: ["hxml"]
    },
    {
        name: "ASP.NET",
        mime: "application/x-aspx",
        mode: "htmlembedded",
        ext: ["aspx"],
        alias: ["asp", "aspx"]
    },
    {
        name: "HTML",
        mime: "text/html",
        mode: "htmlmixed",
        ext: ["html", "htm"],
        alias: ["xhtml"]
    },
    {
        name: "HTTP",
        mime: "message/http",
        mode: "http"
    },
    {
        name: "IDL",
        mime: "text/x-idl",
        mode: "idl",
        ext: ["pro"]
    },
    {
        name: "Jade",
        mime: "text/x-jade",
        mode: "jade",
        ext: ["jade"]
    },
    {
        name: "Java",
        mime: "text/x-java",
        mode: "clike",
        ext: ["java"]
    },
    {
        name: "Java Server Pages",
        mime: "application/x-jsp",
        mode: "htmlembedded",
        ext: ["jsp"],
        alias: ["jsp"]
    },
    {
        name: "JavaScript",
        mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
        mode: "javascript",
        ext: ["js"],
        alias: ["ecmascript", "js", "node"]
    },
    {
        name: "JSON",
        mimes: ["application/json", "application/x-json"],
        mode: "javascript",
        ext: ["json", "map"],
        alias: ["json5"]
    },
    {
        name: "JSON-LD",
        mime: "application/ld+json",
        mode: "javascript",
        ext: ["jsonld"],
        alias: ["jsonld"]
    },
    {
        name: "Jinja2",
        mime: "null",
        mode: "jinja2"
    },
    {
        name: "Julia",
        mime: "text/x-julia",
        mode: "julia",
        ext: ["jl"]
    },
    {
        name: "Kotlin",
        mime: "text/x-kotlin",
        mode: "kotlin",
        ext: ["kt"]
    },
    {
        name: "LESS",
        mime: "text/x-less",
        mode: "css",
        ext: ["less"]
    },
    {
        name: "LiveScript",
        mime: "text/x-livescript",
        mode: "livescript",
        ext: ["ls"],
        alias: ["ls"]
    },
    {
        name: "Lua",
        mime: "text/x-lua",
        mode: "lua",
        ext: ["lua"]
    },
    {
        name: "Markdown",
        mime: "text/x-markdown",
        mode: "markdown",
        ext: ["markdown", "md", "mkd"]
    },
    {
        name: "mIRC",
        mime: "text/mirc",
        mode: "mirc"
    },
    {
        name: "MariaDB SQL",
        mime: "text/x-mariadb",
        mode: "sql"
    },
    {
        name: "Modelica",
        mime: "text/x-modelica",
        mode: "modelica",
        ext: ["mo"]
    },
    {
        name: "MS SQL",
        mime: "text/x-mssql",
        mode: "sql"
    },
    {
        name: "MySQL",
        mime: "text/x-mysql",
        mode: "sql"
    },
    {
        name: "Nginx",
        mime: "text/x-nginx-conf",
        mode: "nginx",
        file: /nginx.*\.conf$/i
    },
    {
        name: "NTriples",
        mime: "text/n-triples",
        mode: "ntriples",
        ext: ["nt"]
    },
    {
        name: "Objective C",
        mime: "text/x-objectivec",
        mode: "clike",
        ext: ["m", "mm"]
    },
    {
        name: "OCaml",
        mime: "text/x-ocaml",
        mode: "mllike",
        ext: ["ml", "mli", "mll", "mly"]
    },
    {
        name: "Octave",
        mime: "text/x-octave",
        mode: "octave",
        ext: ["m"]
    },
    {
        name: "Pascal",
        mime: "text/x-pascal",
        mode: "pascal",
        ext: ["p", "pas"]
    },
    {
        name: "PEG.js",
        mime: "null",
        mode: "pegjs",
        ext: ["jsonld"]
    },
    {
        name: "Perl",
        mime: "text/x-perl",
        mode: "perl",
        ext: ["pl", "pm"]
    },
    {
        name: "PHP",
        mime: "application/x-httpd-php",
        mode: "php",
        ext: ["php", "php3", "php4", "php5", "phtml"]
    },
    {
        name: "Pig",
        mime: "text/x-pig",
        mode: "pig",
        ext: ["pig"]
    },
    {
        name: "Plain Text",
        mime: "text/plain",
        mode: "null",
        ext: ["txt", "text", "conf", "def", "list", "log"]
    },
    {
        name: "PLSQL",
        mime: "text/x-plsql",
        mode: "sql",
        ext: ["pls"]
    },
    {
        name: "Properties files",
        mime: "text/x-properties",
        mode: "properties",
        ext: ["properties", "ini", "in"],
        alias: ["ini", "properties"]
    },
    {
        name: "Python",
        mime: "text/x-python",
        mode: "python",
        ext: ["py", "pyw"]
    },
    {
        name: "Puppet",
        mime: "text/x-puppet",
        mode: "puppet",
        ext: ["pp"]
    },
    {
        name: "Q",
        mime: "text/x-q",
        mode: "q",
        ext: ["q"]
    },
    {
        name: "R",
        mime: "text/x-rsrc",
        mode: "r",
        ext: ["r"],
        alias: ["rscript"]
    },
    {
        name: "reStructuredText",
        mime: "text/x-rst",
        mode: "rst",
        ext: ["rst"],
        alias: ["rst"]
    },
    {
        name: "RPM Changes",
        mime: "text/x-rpm-changes",
        mode: "rpm"
    },
    {
        name: "RPM Spec",
        mime: "text/x-rpm-spec",
        mode: "rpm",
        ext: ["spec"]
    },
    {
        name: "Ruby",
        mime: "text/x-ruby",
        mode: "ruby",
        ext: ["rb"],
        alias: ["jruby", "macruby", "rake", "rb", "rbx"]
    },
    {
        name: "Rust",
        mime: "text/x-rustsrc",
        mode: "rust",
        ext: ["rs"]
    },
    {
        name: "Sass",
        mime: "text/x-sass",
        mode: "sass",
        ext: ["sass"]
    },
    {
        name: "Scala",
        mime: "text/x-scala",
        mode: "clike",
        ext: ["scala"]
    },
    {
        name: "Scheme",
        mime: "text/x-scheme",
        mode: "scheme",
        ext: ["scm", "ss"]
    },
    {
        name: "SCSS",
        mime: "text/x-scss",
        mode: "css",
        ext: ["scss"]
    },
    {
        name: "Shell",
        mime: "text/x-sh",
        mode: "shell",
        ext: ["sh", "ksh", "bash"],
        alias: ["bash", "sh", "zsh"]
    },
    {
        name: "Sieve",
        mime: "application/sieve",
        mode: "sieve",
        ext: ["siv", "sieve"]
    },
    {
        name: "Slim",
        mimes: ["text/x-slim", "application/x-slim"],
        mode: "slim",
        ext: ["slim"]
    },
    {
        name: "Smalltalk",
        mime: "text/x-stsrc",
        mode: "smalltalk",
        ext: ["st"]
    },
    {
        name: "Smarty",
        mime: "text/x-smarty",
        mode: "smarty",
        ext: ["tpl"]
    },
    {
        name: "SmartyMixed",
        mime: "text/x-smarty",
        mode: "smartymixed"
    },
    {
        name: "Solr",
        mime: "text/x-solr",
        mode: "solr"
    },
    {
        name: "Soy",
        mime: "text/x-soy",
        mode: "soy",
        ext: ["soy"],
        alias: ["closure template"]
    },
    {
        name: "SPARQL",
        mime: "application/sparql-query",
        mode: "sparql",
        ext: ["rq", "sparql"],
        alias: ["sparul"]
    },
    {
        name: "Spreadsheet",
        mime: "text/x-spreadsheet",
        mode: "spreadsheet",
        alias: ["excel", "formula"]
    },
    {
        name: "SQL",
        mime: "text/x-sql",
        mode: "sql",
        ext: ["sql"]
    },
    {
        name: "MariaDB",
        mime: "text/x-mariadb",
        mode: "sql"
    },
    {
        name: "sTeX",
        mime: "text/x-stex",
        mode: "stex"
    },
    {
        name: "LaTeX",
        mime: "text/x-latex",
        mode: "stex",
        ext: ["text", "ltx"],
        alias: ["tex"]
    },
    {
        name: "SystemVerilog",
        mime: "text/x-systemverilog",
        mode: "verilog",
        ext: ["v"]
    },
    {
        name: "Tcl",
        mime: "text/x-tcl",
        mode: "tcl",
        ext: ["tcl"]
    },
    {
        name: "Textile",
        mime: "text/x-textile",
        mode: "textile",
        ext: ["textile"]
    },
    {
        name: "TiddlyWiki ",
        mime: "text/x-tiddlywiki",
        mode: "tiddlywiki"
    },
    {
        name: "Tiki wiki",
        mime: "text/tiki",
        mode: "tiki"
    },
    {
        name: "TOML",
        mime: "text/x-toml",
        mode: "toml",
        ext: ["toml"]
    },
    {
        name: "Tornado",
        mime: "text/x-tornado",
        mode: "tornado"
    },
    {
        name: "Turtle",
        mime: "text/turtle",
        mode: "turtle",
        ext: ["ttl"]
    },
    {
        name: "TypeScript",
        mime: "application/typescript",
        mode: "javascript",
        ext: ["ts"],
        alias: ["ts"]
    },
    {
        name: "VB.NET",
        mime: "text/x-vb",
        mode: "vb",
        ext: ["vb"]
    },
    {
        name: "VBScript",
        mime: "text/vbscript",
        mode: "vbscript",
        ext: ["vbs"]
    },
    {
        name: "Velocity",
        mime: "text/velocity",
        mode: "velocity",
        ext: ["vtl"]
    },
    {
        name: "Verilog",
        mime: "text/x-verilog",
        mode: "verilog",
        ext: ["v"]
    },
    {
        name: "XML",
        mimes: ["application/xml", "text/xml"],
        mode: "xml",
        ext: ["xml", "xsl", "xsd"],
        alias: ["rss", "wsdl", "xsd"]
    },
    {
        name: "XQuery",
        mime: "application/xquery",
        mode: "xquery",
        ext: ["xy", "xquery"]
    },
    {
        name: "YAML",
        mime: "text/x-yaml",
        mode: "yaml",
        ext: ["yaml"],
        alias: ["yml"]
    },
    {
        name: "Z80",
        mime: "text/x-z80",
        mode: "z80",
        ext: ["z80"]
    }];
    for (var t = 0; t < e.modeInfo.length; t++) {
        var r = e.modeInfo[t];
        r.mimes && (r.mime = r.mimes[0])
    }
    e.findModeByMIME = function(t) {
        t = t.toLowerCase();
        for (var r = 0; r < e.modeInfo.length; r++) {
            var n = e.modeInfo[r];
            if (n.mime == t) return n;
            if (n.mimes) for (var i = 0; i < n.mimes.length; i++) if (n.mimes[i] == t) return n
        }
    },
    e.findModeByExtension = function(t) {
        for (var r = 0; r < e.modeInfo.length; r++) {
            var n = e.modeInfo[r];
            if (n.ext) for (var i = 0; i < n.ext.length; i++) if (n.ext[i] == t) return n
        }
    },
    e.findModeByFileName = function(t) {
        for (var r = 0; r < e.modeInfo.length; r++) {
            var n = e.modeInfo[r];
            if (n.file && n.file.test(t)) return n
        }
        var i = t.lastIndexOf("."),
        o = i > -1 && t.substring(i + 1, t.length);
        return o ? e.findModeByExtension(o) : void 0
    },
    e.findModeByName = function(t) {
        t = t.toLowerCase();
        for (var r = 0; r < e.modeInfo.length; r++) {
            var n = e.modeInfo[r];
            if (n.name.toLowerCase() == t) return n;
            if (n.alias) for (var i = 0; i < n.alias.length; i++) if (n.alias[i].toLowerCase() == t) return n
        }
    }
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    function t(e) {
        for (var t = {},
        r = 0; r < e.length; ++r) t[e[r]] = !0;
        return t
    }
    function r(e, t) {
        for (var r, n = !1; null != (r = e.next());) {
            if (n && "/" == r) {
                t.tokenize = null;
                break
            }
            n = "*" == r
        }
        return ["comment", "comment"]
    }
    function n(e, t) {
        return e.skipTo("-->") ? (e.match("-->"), t.tokenize = null) : e.skipToEnd(),
        ["comment", "comment"]
    }
    e.defineMode("css",
    function(t, r) {
        function n(e, t) {
            return m = t,
            e
        }
        function i(e, t) {
            var r = e.next();
            if (g[r]) {
                var i = g[r](e, t);
                if (i !== !1) return i
            }
            return "@" == r ? (e.eatWhile(/[\w\\\-]/), n("def", e.current())) : "=" == r || ("~" == r || "|" == r) && e.eat("=") ? n(null, "compare") : '"' == r || "'" == r ? (t.tokenize = o(r), t.tokenize(e, t)) : "#" == r ? (e.eatWhile(/[\w\\\-]/), n("atom", "hash")) : "!" == r ? (e.match(/^\s*\w*/), n("keyword", "important")) : /\d/.test(r) || "." == r && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), n("number", "unit")) : "-" !== r ? /[,+>*\/]/.test(r) ? n(null, "select-op") : "." == r && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? n("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(r) ? n(null, r) : "u" == r && e.match(/rl(-prefix)?\(/) || "d" == r && e.match("omain(") || "r" == r && e.match("egexp(") ? (e.backUp(1), t.tokenize = a, n("property", "word")) : /[\w\\\-]/.test(r) ? (e.eatWhile(/[\w\\\-]/), n("property", "word")) : n(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), n("number", "unit")) : e.match(/^-[\w\\\-]+/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? n("variable-2", "variable-definition") : n("variable-2", "variable")) : e.match(/^\w+-/) ? n("meta", "meta") : void 0
        }
        function o(e) {
            return function(t, r) {
                for (var i, o = !1; null != (i = t.next());) {
                    if (i == e && !o) {
                        ")" == e && t.backUp(1);
                        break
                    }
                    o = !o && "\\" == i
                }
                return (i == e || !o && ")" != e) && (r.tokenize = null),
                n("string", "string")
            }
        }
        function a(e, t) {
            return e.next(),
            e.match(/\s*[\"\')]/, !1) ? t.tokenize = null: t.tokenize = o(")"),
            n(null, "(")
        }
        function s(e, t, r) {
            this.type = e,
            this.indent = t,
            this.prev = r
        }
        function l(e, t, r) {
            return e.context = new s(r, t.indentation() + p, e.context),
            r
        }
        function c(e) {
            return e.context = e.context.prev,
            e.context.type
        }
        function u(e, t, r) {
            return M[r.context.type](e, t, r)
        }
        function d(e, t, r, n) {
            for (var i = n || 1; i > 0; i--) r.context = r.context.prev;
            return u(e, t, r)
        }
        function f(e) {
            var t = e.current().toLowerCase();
            h = S.hasOwnProperty(t) ? "atom": C.hasOwnProperty(t) ? "keyword": "variable"
        }
        r.propertyKeywords || (r = e.resolveMode("text/css"));
        var m, h, p = t.indentUnit,
        g = r.tokenHooks,
        v = r.documentTypes || {},
        b = r.mediaTypes || {},
        y = r.mediaFeatures || {},
        x = r.propertyKeywords || {},
        k = r.nonStandardPropertyKeywords || {},
        w = r.fontProperties || {},
        _ = r.counterDescriptors || {},
        C = r.colorKeywords || {},
        S = r.valueKeywords || {},
        T = r.allowNested,
        M = {};
        return M.top = function(e, t, r) {
            if ("{" == e) return l(r, t, "block");
            if ("}" == e && r.context.prev) return c(r);
            if (/@(media|supports|(-moz-)?document)/.test(e)) return l(r, t, "atBlock");
            if (/@(font-face|counter-style)/.test(e)) return r.stateArg = e,
            "restricted_atBlock_before";
            if (/^@(-(moz|ms|o|webkit)-)?keyframes$/.test(e)) return "keyframes";
            if (e && "@" == e.charAt(0)) return l(r, t, "at");
            if ("hash" == e) h = "builtin";
            else if ("word" == e) h = "tag";
            else {
                if ("variable-definition" == e) return "maybeprop";
                if ("interpolation" == e) return l(r, t, "interpolation");
                if (":" == e) return "pseudo";
                if (T && "(" == e) return l(r, t, "parens")
            }
            return r.context.type
        },
        M.block = function(e, t, r) {
            if ("word" == e) {
                var n = t.current().toLowerCase();
                return x.hasOwnProperty(n) ? (h = "property", "maybeprop") : k.hasOwnProperty(n) ? (h = "string-2", "maybeprop") : T ? (h = t.match(/^\s*:(?:\s|$)/, !1) ? "property": "tag", "block") : (h += " error", "maybeprop")
            }
            return "meta" == e ? "block": T || "hash" != e && "qualifier" != e ? M.top(e, t, r) : (h = "error", "block")
        },
        M.maybeprop = function(e, t, r) {
            return ":" == e ? l(r, t, "prop") : u(e, t, r)
        },
        M.prop = function(e, t, r) {
            if (";" == e) return c(r);
            if ("{" == e && T) return l(r, t, "propBlock");
            if ("}" == e || "{" == e) return d(e, t, r);
            if ("(" == e) return l(r, t, "parens");
            if ("hash" != e || /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t.current())) {
                if ("word" == e) f(t);
                else if ("interpolation" == e) return l(r, t, "interpolation")
            } else h += " error";
            return "prop"
        },
        M.propBlock = function(e, t, r) {
            return "}" == e ? c(r) : "word" == e ? (h = "property", "maybeprop") : r.context.type
        },
        M.parens = function(e, t, r) {
            return "{" == e || "}" == e ? d(e, t, r) : ")" == e ? c(r) : "(" == e ? l(r, t, "parens") : ("word" == e && f(t), "parens")
        },
        M.pseudo = function(e, t, r) {
            return "word" == e ? (h = "variable-3", r.context.type) : u(e, t, r)
        },
        M.atBlock = function(e, t, r) {
            if ("(" == e) return l(r, t, "atBlock_parens");
            if ("}" == e) return d(e, t, r);
            if ("{" == e) return c(r) && l(r, t, T ? "block": "top");
            if ("word" == e) {
                var n = t.current().toLowerCase();
                h = "only" == n || "not" == n || "and" == n || "or" == n ? "keyword": v.hasOwnProperty(n) ? "tag": b.hasOwnProperty(n) ? "attribute": y.hasOwnProperty(n) ? "property": x.hasOwnProperty(n) ? "property": k.hasOwnProperty(n) ? "string-2": S.hasOwnProperty(n) ? "atom": "error"
            }
            return r.context.type
        },
        M.atBlock_parens = function(e, t, r) {
            return ")" == e ? c(r) : "{" == e || "}" == e ? d(e, t, r, 2) : M.atBlock(e, t, r)
        },
        M.restricted_atBlock_before = function(e, t, r) {
            return "{" == e ? l(r, t, "restricted_atBlock") : "word" == e && "@counter-style" == r.stateArg ? (h = "variable", "restricted_atBlock_before") : u(e, t, r)
        },
        M.restricted_atBlock = function(e, t, r) {
            return "}" == e ? (r.stateArg = null, c(r)) : "word" == e ? (h = "@font-face" == r.stateArg && !w.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == r.stateArg && !_.hasOwnProperty(t.current().toLowerCase()) ? "error": "property", "maybeprop") : "restricted_atBlock"
        },
        M.keyframes = function(e, t, r) {
            return "word" == e ? (h = "variable", "keyframes") : "{" == e ? l(r, t, "top") : u(e, t, r)
        },
        M.at = function(e, t, r) {
            return ";" == e ? c(r) : "{" == e || "}" == e ? d(e, t, r) : ("word" == e ? h = "tag": "hash" == e && (h = "builtin"), "at")
        },
        M.interpolation = function(e, t, r) {
            return "}" == e ? c(r) : "{" == e || ";" == e ? d(e, t, r) : ("variable" != e && (h = "error"), "interpolation")
        },
        {
            startState: function(e) {
                return {
                    tokenize: null,
                    state: "top",
                    stateArg: null,
                    context: new s("top", e || 0, null)
                }
            },
            token: function(e, t) {
                if (!t.tokenize && e.eatSpace()) return null;
                var r = (t.tokenize || i)(e, t);
                return r && "object" == typeof r && (m = r[1], r = r[0]),
                h = r,
                t.state = M[t.state](m, e, t),
                h
            },
            indent: function(e, t) {
                var r = e.context,
                n = t && t.charAt(0),
                i = r.indent;
                return "prop" != r.type || "}" != n && ")" != n || (r = r.prev),
                !r.prev || ("}" != n || "block" != r.type && "top" != r.type && "interpolation" != r.type && "restricted_atBlock" != r.type) && (")" != n || "parens" != r.type && "atBlock_parens" != r.type) && ("{" != n || "at" != r.type && "atBlock" != r.type) || (i = r.indent - p, r = r.prev),
                i
            },
            electricChars: "}",
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            fold: "brace"
        }
    });
    var i = ["domain", "regexp", "url", "url-prefix"],
    o = t(i),
    a = ["all", "aural", "braille", "handheld", "print", "projection", "screen", "tty", "tv", "embossed"],
    s = t(a),
    l = ["width", "min-width", "max-width", "height", "min-height", "max-height", "device-width", "min-device-width", "max-device-width", "device-height", "min-device-height", "max-device-height", "aspect-ratio", "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio", "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color", "max-color", "color-index", "min-color-index", "max-color-index", "monochrome", "min-monochrome", "max-monochrome", "resolution", "min-resolution", "max-resolution", "scan", "grid"],
    c = t(l),
    u = ["align-content", "align-items", "align-self", "alignment-adjust", "alignment-baseline", "anchor-point", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "azimuth", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "baseline-shift", "binding", "bleed", "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "color", "color-profile", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "dominant-baseline", "drop-initial-after-adjust", "drop-initial-after-align", "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size", "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into", "font", "font-feature-settings", "font-family", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-position", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "inline-box-align", "justify-content", "left", "letter-spacing", "line-break", "line-height", "line-stacking", "line-stacking-ruby", "line-stacking-shift", "line-stacking-strategy", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marker-offset", "marks", "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed", "marquee-style", "max-height", "max-width", "min-height", "min-width", "move-to", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-style", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page", "page-break-after", "page-break-before", "page-break-inside", "page-policy", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pitch", "pitch-range", "play-during", "position", "presentation-level", "punctuation-trim", "quotes", "region-break-after", "region-break-before", "region-break-inside", "region-fragment", "rendering-intent", "resize", "rest", "rest-after", "rest-before", "richness", "right", "rotation", "rotation-point", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside", "size", "speak", "speak-as", "speak-header", "speak-numeral", "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size", "table-layout", "target", "target-name", "target-new", "target-position", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-skip", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-height", "text-indent", "text-justify", "text-outline", "text-overflow", "text-shadow", "text-size-adjust", "text-space-collapse", "text-transform", "text-underline-position", "text-wrap", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "volume", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index", "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color", "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events", "color-interpolation", "color-interpolation-filters", "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering", "marker", "marker-end", "marker-mid", "marker-start", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering", "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal", "glyph-orientation-vertical", "text-anchor", "writing-mode"],
    d = t(u),
    f = ["scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-3d-light-color", "scrollbar-track-color", "shape-inside", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "zoom"],
    m = t(f),
    h = ["font-family", "src", "unicode-range", "font-variant", "font-feature-settings", "font-stretch", "font-weight", "font-style"],
    p = t(h),
    g = ["additive-symbols", "fallback", "negative", "pad", "prefix", "range", "speak-as", "suffix", "symbols", "system"],
    v = t(g),
    b = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
    y = t(b),
    x = ["above", "absolute", "activeborder", "additive", "activecaption", "afar", "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate", "always", "amharic", "amharic-abegede", "antialiased", "appworkspace", "arabic-indic", "armenian", "asterisks", "attr", "auto", "avoid", "avoid-column", "avoid-page", "avoid-region", "background", "backwards", "baseline", "below", "bidi-override", "binary", "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box", "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel", "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian", "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret", "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch", "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote", "col-resize", "collapse", "column", "compact", "condensed", "contain", "content", "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop", "cross", "crosshair", "currentcolor", "cursive", "cyclic", "dashed", "decimal", "decimal-leading-zero", "default", "default-button", "destination-atop", "destination-in", "destination-out", "destination-over", "devanagari", "disc", "discard", "disclosure-closed", "disclosure-open", "document", "dot-dash", "dot-dot-dash", "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out", "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede", "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er", "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er", "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et", "ethiopic-halehame-gez", "ethiopic-halehame-om-et", "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et", "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig", "ethiopic-numeric", "ew-resize", "expanded", "extends", "extra-condensed", "extra-expanded", "fantasy", "fast", "fill", "fixed", "flat", "flex", "footnotes", "forwards", "from", "geometricPrecision", "georgian", "graytext", "groove", "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hebrew", "help", "hidden", "hide", "higher", "highlight", "highlighttext", "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "icon", "ignore", "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite", "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis", "inline-block", "inline-flex", "inline-table", "inset", "inside", "intrinsic", "invert", "italic", "japanese-formal", "japanese-informal", "justify", "kannada", "katakana", "katakana-iroha", "keep-all", "khmer", "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal", "landscape", "lao", "large", "larger", "left", "level", "lighter", "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem", "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian", "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian", "lower-roman", "lowercase", "ltr", "malayalam", "match", "matrix", "matrix3d", "media-controls-background", "media-current-time-display", "media-fullscreen-button", "media-mute-button", "media-play-button", "media-return-to-realtime-button", "media-rewind-button", "media-seek-back-button", "media-seek-forward-button", "media-slider", "media-sliderthumb", "media-time-remaining-display", "media-volume-slider", "media-volume-slider-container", "media-volume-sliderthumb", "medium", "menu", "menulist", "menulist-button", "menulist-text", "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic", "mix", "mongolian", "monospace", "move", "multiple", "myanmar", "n-resize", "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop", "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap", "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "open-quote", "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset", "outside", "outside-shape", "overlay", "overline", "padding", "padding-box", "painted", "page", "paused", "persian", "perspective", "plus-darker", "plus-lighter", "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d", "progress", "push-button", "radial-gradient", "radio", "read-only", "read-write", "read-write-plaintext-only", "rectangle", "region", "relative", "repeat", "repeating-linear-gradient", "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse", "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "round", "row-resize", "rtl", "run-in", "running", "s-resize", "sans-serif", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "scroll", "scrollbar", "se-resize", "searchfield", "searchfield-cancel-button", "searchfield-decoration", "searchfield-results-button", "searchfield-results-decoration", "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama", "simp-chinese-formal", "simp-chinese-informal", "single", "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal", "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow", "small", "small-caps", "small-caption", "smaller", "solid", "somali", "source-atop", "source-in", "source-out", "source-over", "space", "spell-out", "square", "square-button", "start", "static", "status-bar", "stretch", "stroke", "sub", "subpixel-antialiased", "super", "sw-resize", "symbolic", "symbols", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group", "tamil", "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai", "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight", "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er", "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top", "trad-chinese-formal", "trad-chinese-informal", "translate", "translate3d", "translateX", "translateY", "translateZ", "transparent", "ultra-condensed", "ultra-expanded", "underline", "up", "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal", "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url", "var", "vertical", "vertical-text", "visible", "visibleFill", "visiblePainted", "visibleStroke", "visual", "w-resize", "wait", "wave", "wider", "window", "windowframe", "windowtext", "words", "x-large", "x-small", "xor", "xx-large", "xx-small"],
    k = t(x),
    w = i.concat(a).concat(l).concat(u).concat(f).concat(b).concat(x);
    e.registerHelper("hintWords", "css", w),
    e.defineMIME("text/css", {
        documentTypes: o,
        mediaTypes: s,
        mediaFeatures: c,
        propertyKeywords: d,
        nonStandardPropertyKeywords: m,
        fontProperties: p,
        counterDescriptors: v,
        colorKeywords: y,
        valueKeywords: k,
        tokenHooks: {
            "<": function(e, t) {
                return e.match("!--") ? (t.tokenize = n, n(e, t)) : !1
            },
            "/": function(e, t) {
                return e.eat("*") ? (t.tokenize = r, r(e, t)) : !1
            }
        },
        name: "css"
    }),
    e.defineMIME("text/x-scss", {
        mediaTypes: s,
        mediaFeatures: c,
        propertyKeywords: d,
        nonStandardPropertyKeywords: m,
        colorKeywords: y,
        valueKeywords: k,
        fontProperties: p,
        allowNested: !0,
        tokenHooks: {
            "/": function(e, t) {
                return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = r, r(e, t)) : ["operator", "operator"]
            },
            ":": function(e) {
                return e.match(/\s*\{/) ? [null, "{"] : !1
            },
            $: function(e) {
                return e.match(/^[\w-]+/),
                e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"]
            },
            "#": function(e) {
                return e.eat("{") ? [null, "interpolation"] : !1
            }
        },
        name: "css",
        helperType: "scss"
    }),
    e.defineMIME("text/x-less", {
        mediaTypes: s,
        mediaFeatures: c,
        propertyKeywords: d,
        nonStandardPropertyKeywords: m,
        colorKeywords: y,
        valueKeywords: k,
        fontProperties: p,
        allowNested: !0,
        tokenHooks: {
            "/": function(e, t) {
                return e.eat("/") ? (e.skipToEnd(), ["comment", "comment"]) : e.eat("*") ? (t.tokenize = r, r(e, t)) : ["operator", "operator"]
            },
            "@": function(e) {
                return e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/, !1) ? !1 : (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? ["variable-2", "variable-definition"] : ["variable-2", "variable"])
            },
            "&": function() {
                return ["atom", "atom"]
            }
        },
        name: "css",
        helperType: "less"
    })
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("sass",
    function(e) {
        function t(e) {
            return new RegExp("^" + e.join("|"))
        }
        function r(e, t) {
            var r = e.peek();
            return ")" === r ? (e.next(), t.tokenizer = l, "operator") : "(" === r ? (e.next(), e.eatSpace(), "operator") : "'" === r || '"' === r ? (t.tokenizer = i(e.next()), "string") : (t.tokenizer = i(")", !1), "string")
        }
        function n(e, t) {
            return function(r, n) {
                return r.sol() && r.indentation() <= e ? (n.tokenizer = l, l(r, n)) : (t && r.skipTo("*/") ? (r.next(), r.next(), n.tokenizer = l) : r.skipToEnd(), "comment")
            }
        }
        function i(e, t) {
            function r(n, i) {
                var a = n.next(),
                s = n.peek(),
                c = n.string.charAt(n.pos - 2),
                u = "\\" !== a && s === e || a === e && "\\" !== c;
                return u ? (a !== e && t && n.next(), i.tokenizer = l, "string") : "#" === a && "{" === s ? (i.tokenizer = o(r), n.next(), "operator") : "string"
            }
            return null == t && (t = !0),
            r
        }
        function o(e) {
            return function(t, r) {
                return "}" === t.peek() ? (t.next(), r.tokenizer = e, "operator") : l(t, r)
            }
        }
        function a(t) {
            if (0 == t.indentCount) {
                t.indentCount++;
                var r = t.scopes[0].offset,
                n = r + e.indentUnit;
                t.scopes.unshift({
                    offset: n
                })
            }
        }
        function s(e) {
            1 != e.scopes.length && e.scopes.shift()
        }
        function l(e, t) {
            var c = e.peek();
            if (e.match("/*")) return t.tokenizer = n(e.indentation(), !0),
            t.tokenizer(e, t);
            if (e.match("//")) return t.tokenizer = n(e.indentation(), !1),
            t.tokenizer(e, t);
            if (e.match("#{")) return t.tokenizer = o(l),
            "operator";
            if ('"' === c || "'" === c) return e.next(),
            t.tokenizer = i(c),
            "string";
            if (t.cursorHalf) {
                if ("#" === c && (e.next(), e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/))) return e.peek() || (t.cursorHalf = 0),
                "number";
                if (e.match(/^-?[0-9\.]+/)) return e.peek() || (t.cursorHalf = 0),
                "number";
                if (e.match(/^(px|em|in)\b/)) return e.peek() || (t.cursorHalf = 0),
                "unit";
                if (e.match(d)) return e.peek() || (t.cursorHalf = 0),
                "keyword";
                if (e.match(/^url/) && "(" === e.peek()) return t.tokenizer = r,
                e.peek() || (t.cursorHalf = 0),
                "atom";
                if ("$" === c) return e.next(),
                e.eatWhile(/[\w-]/),
                e.peek() || (t.cursorHalf = 0),
                "variable-3";
                if ("!" === c) return e.next(),
                e.peek() || (t.cursorHalf = 0),
                e.match(/^[\w]+/) ? "keyword": "operator";
                if (e.match(m)) return e.peek() || (t.cursorHalf = 0),
                "operator";
                if (e.eatWhile(/[\w-]/)) return e.peek() || (t.cursorHalf = 0),
                "attribute";
                if (!e.peek()) return t.cursorHalf = 0,
                null
            } else {
                if ("." === c) {
                    if (e.next(), e.match(/^[\w-]+/)) return a(t),
                    "atom";
                    if ("#" === e.peek()) return a(t),
                    "atom"
                }
                if ("#" === c) {
                    if (e.next(), e.match(/^[\w-]+/)) return a(t),
                    "atom";
                    if ("#" === e.peek()) return a(t),
                    "atom"
                }
                if ("$" === c) return e.next(),
                e.eatWhile(/[\w-]/),
                "variable-2";
                if (e.match(/^-?[0-9\.]+/)) return "number";
                if (e.match(/^(px|em|in)\b/)) return "unit";
                if (e.match(d)) return "keyword";
                if (e.match(/^url/) && "(" === e.peek()) return t.tokenizer = r,
                "atom";
                if ("=" === c && e.match(/^=[\w-]+/)) return a(t),
                "meta";
                if ("+" === c && e.match(/^\+[\w-]+/)) return "variable-3";
                if ("@" === c && e.match(/@extend/) && (e.match(/\s*[\w]/) || s(t)), e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/)) return a(t),
                "meta";
                if ("@" === c) return e.next(),
                e.eatWhile(/[\w-]/),
                "meta";
                if (e.eatWhile(/[\w-]/)) return e.match(/ *: *[\w-\+\$#!\("']/, !1) ? "propery": e.match(/ *:/, !1) ? (a(t), t.cursorHalf = 1, "atom") : e.match(/ *,/, !1) ? "atom": (a(t), "atom");
                if (":" === c) return e.match(h) ? "keyword": (e.next(), t.cursorHalf = 1, "operator")
            }
            return e.match(m) ? "operator": (e.next(), null)
        }
        function c(t, r) {
            t.sol() && (r.indentCount = 0);
            var n = r.tokenizer(t, r),
            i = t.current();
            if (("@return" === i || "}" === i) && s(r), null !== n) {
                for (var o = t.pos - i.length,
                a = o + e.indentUnit * r.indentCount,
                l = [], c = 0; c < r.scopes.length; c++) {
                    var u = r.scopes[c];
                    u.offset <= a && l.push(u)
                }
                r.scopes = l
            }
            return n
        }
        var u = ["true", "false", "null", "auto"],
        d = new RegExp("^" + u.join("|")),
        f = ["\\(", "\\)", "=", ">", "<", "==", ">=", "<=", "\\+", "-", "\\!=", "/", "\\*", "%", "and", "or", "not", ";", "\\{", "\\}", ":"],
        m = t(f),
        h = /^::?[a-zA-Z_][\w\-]*/;
        return {
            startState: function() {
                return {
                    tokenizer: l,
                    scopes: [{
                        offset: 0,
                        type: "sass"
                    }],
                    indentCount: 0,
                    cursorHalf: 0,
                    definedVars: [],
                    definedMixins: []
                }
            },
            token: function(e, t) {
                var r = c(e, t);
                return t.lastToken = {
                    style: r,
                    content: e.current()
                },
                r
            },
            indent: function(e) {
                return e.scopes[0].offset
            }
        }
    }),
    e.defineMIME("text/x-sass", "sass")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("shell",
    function() {
        function e(e, t) {
            for (var r = t.split(" "), n = 0; n < r.length; n++) i[r[n]] = e
        }
        function t(e, t) {
            if (e.eatSpace()) return null;
            var a = e.sol(),
            s = e.next();
            if ("\\" === s) return e.next(),
            null;
            if ("'" === s || '"' === s || "`" === s) return t.tokens.unshift(r(s)),
            n(e, t);
            if ("#" === s) return a && e.eat("!") ? (e.skipToEnd(), "meta") : (e.skipToEnd(), "comment");
            if ("$" === s) return t.tokens.unshift(o),
            n(e, t);
            if ("+" === s || "=" === s) return "operator";
            if ("-" === s) return e.eat("-"),
            e.eatWhile(/\w/),
            "attribute";
            if (/\d/.test(s) && (e.eatWhile(/\d/), e.eol() || !/\w/.test(e.peek()))) return "number";
            e.eatWhile(/[\w-]/);
            var l = e.current();
            return "=" === e.peek() && /\w+/.test(l) ? "def": i.hasOwnProperty(l) ? i[l] : null
        }
        function r(e) {
            return function(t, r) {
                for (var n, i = !1,
                a = !1; null != (n = t.next());) {
                    if (n === e && !a) {
                        i = !0;
                        break
                    }
                    if ("$" === n && !a && "'" !== e) {
                        a = !0,
                        t.backUp(1),
                        r.tokens.unshift(o);
                        break
                    }
                    a = !a && "\\" === n
                }
                return (i || !a) && r.tokens.shift(),
                "`" === e || ")" === e ? "quote": "string"
            }
        }
        function n(e, r) {
            return (r.tokens[0] || t)(e, r)
        }
        var i = {};
        e("atom", "true false"),
        e("keyword", "if then do else elif while until for in esac fi fin fil done exit set unset export function"),
        e("builtin", "ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo tee telnet top touch vi vim wall wc wget who write yes zsh");
        var o = function(e, t) {
            t.tokens.length > 1 && e.eat("$");
            var i = e.next(),
            o = /\w/;
            return "{" === i && (o = /[^}]/),
            "(" === i ? (t.tokens[0] = r(")"), n(e, t)) : (/\d/.test(i) || (e.eatWhile(o), e.eat("}")), t.tokens.shift(), "def")
        };
        return {
            startState: function() {
                return {
                    tokens: []
                }
            },
            token: function(e, t) {
                return n(e, t)
            },
            lineComment: "#",
            fold: "brace"
        }
    }),
    e.defineMIME("text/x-sh", "shell")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("sql",
    function(t, r) {
        function n(e, t) {
            var r = e.next();
            if (h[r]) {
                var n = h[r](e, t);
                if (n !== !1) return n
            }
            if (1 == m.hexNumber && ("0" == r && e.match(/^[xX][0-9a-fA-F]+/) || ("x" == r || "X" == r) && e.match(/^'[0-9a-fA-F]+'/))) return "number";
            if (1 == m.binaryNumber && (("b" == r || "B" == r) && e.match(/^'[01]+'/) || "0" == r && e.match(/^b[01]+/))) return "number";
            if (r.charCodeAt(0) > 47 && r.charCodeAt(0) < 58) return e.match(/^[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/),
            1 == m.decimallessFloat && e.eat("."),
            "number";
            if ("?" == r && (e.eatSpace() || e.eol() || e.eat(";"))) return "variable-3";
            if ("'" == r || '"' == r && m.doubleQuote) return t.tokenize = i(r),
            t.tokenize(e, t);
            if ((1 == m.nCharCast && ("n" == r || "N" == r) || 1 == m.charsetCast && "_" == r && e.match(/[a-z][a-z0-9]*/i)) && ("'" == e.peek() || '"' == e.peek())) return "keyword";
            if (/^[\(\),\;\[\]]/.test(r)) return null;
            if (m.commentSlashSlash && "/" == r && e.eat("/")) return e.skipToEnd(),
            "comment";
            if (m.commentHash && "#" == r || "-" == r && e.eat("-") && (!m.commentSpaceRequired || e.eat(" "))) return e.skipToEnd(),
            "comment";
            if ("/" == r && e.eat("*")) return t.tokenize = o,
            t.tokenize(e, t);
            if ("." != r) {
                if (f.test(r)) return e.eatWhile(f),
                null;
                if ("{" == r && (e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))) return "number";
                e.eatWhile(/^[_\w\d]/);
                var a = e.current().toLowerCase();
                return p.hasOwnProperty(a) && (e.match(/^( )+'[^']*'/) || e.match(/^( )+"[^"]*"/)) ? "number": c.hasOwnProperty(a) ? "atom": u.hasOwnProperty(a) ? "builtin": d.hasOwnProperty(a) ? "keyword": l.hasOwnProperty(a) ? "string-2": null
            }
            return 1 == m.zerolessFloat && e.match(/^(?:\d+(?:e[+-]?\d+)?)/i) ? "number": 1 == m.ODBCdotTable && e.match(/^[a-zA-Z_]+/) ? "variable-2": void 0
        }
        function i(e) {
            return function(t, r) {
                for (var i, o = !1; null != (i = t.next());) {
                    if (i == e && !o) {
                        r.tokenize = n;
                        break
                    }
                    o = !o && "\\" == i
                }
                return "string"
            }
        }
        function o(e, t) {
            for (;;) {
                if (!e.skipTo("*")) {
                    e.skipToEnd();
                    break
                }
                if (e.next(), e.eat("/")) {
                    t.tokenize = n;
                    break
                }
            }
            return "comment"
        }
        function a(e, t, r) {
            t.context = {
                prev: t.context,
                indent: e.indentation(),
                col: e.column(),
                type: r
            }
        }
        function s(e) {
            e.indent = e.context.indent,
            e.context = e.context.prev
        }
        var l = r.client || {},
        c = r.atoms || {
            "false": !0,
            "true": !0,
            "null": !0
        },
        u = r.builtin || {},
        d = r.keywords || {},
        f = r.operatorChars || /^[*+\-%<>!=&|~^]/,
        m = r.support || {},
        h = r.hooks || {},
        p = r.dateSQL || {
            date: !0,
            time: !0,
            timestamp: !0
        };
        return {
            startState: function() {
                return {
                    tokenize: n,
                    context: null
                }
            },
            token: function(e, t) {
                if (e.sol() && t.context && null == t.context.align && (t.context.align = !1), e.eatSpace()) return null;
                var r = t.tokenize(e, t);
                if ("comment" == r) return r;
                t.context && null == t.context.align && (t.context.align = !0);
                var n = e.current();
                return "(" == n ? a(e, t, ")") : "[" == n ? a(e, t, "]") : t.context && t.context.type == n && s(t),
                r
            },
            indent: function(r, n) {
                var i = r.context;
                if (!i) return e.Pass;
                var o = n.charAt(0) == i.type;
                return i.align ? i.col + (o ? 0 : 1) : i.indent + (o ? 0 : t.indentUnit)
            },
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            lineComment: m.commentSlashSlash ? "//": m.commentHash ? "#": null
        }
    }),
    function() {
        function t(e) {
            for (var t; null != (t = e.next());) if ("`" == t && !e.eat("`")) return "variable-2";
            return e.backUp(e.current().length - 1),
            e.eatWhile(/\w/) ? "variable-2": null
        }
        function r(e) {
            return e.eat("@") && (e.match(/^session\./), e.match(/^local\./), e.match(/^global\./)),
            e.eat("'") ? (e.match(/^.*'/), "variable-2") : e.eat('"') ? (e.match(/^.*"/), "variable-2") : e.eat("`") ? (e.match(/^.*`/), "variable-2") : e.match(/^[0-9a-zA-Z$\.\_]+/) ? "variable-2": null
        }
        function n(e) {
            return e.eat("N") ? "atom": e.match(/^[a-zA-Z.#!?]/) ? "variable-2": null
        }
        function i(e) {
            for (var t = {},
            r = e.split(" "), n = 0; n < r.length; ++n) t[r[n]] = !0;
            return t
        }
        var o = "alter and as asc between by count create delete desc distinct drop from having in insert into is join like not on or order select set table union update values where ";
        e.defineMIME("text/x-sql", {
            name: "sql",
            keywords: i(o + "begin"),
            builtin: i("bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric"),
            atoms: i("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: i("date time timestamp"),
            support: i("ODBCdotTable doubleQuote binaryNumber hexNumber")
        }),
        e.defineMIME("text/x-mssql", {
            name: "sql",
            client: i("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
            keywords: i(o + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered"),
            builtin: i("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
            atoms: i("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: i("date datetimeoffset datetime2 smalldatetime datetime time"),
            hooks: {
                "@": r
            }
        }),
        e.defineMIME("text/x-mysql", {
            name: "sql",
            client: i("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
            keywords: i(o + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group groupby_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
            builtin: i("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
            atoms: i("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^]/,
            dateSQL: i("date time timestamp"),
            support: i("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
            hooks: {
                "@": r,
                "`": t,
                "\\": n
            }
        }),
        e.defineMIME("text/x-mariadb", {
            name: "sql",
            client: i("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
            keywords: i(o + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
            builtin: i("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
            atoms: i("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^]/,
            dateSQL: i("date time timestamp"),
            support: i("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
            hooks: {
                "@": r,
                "`": t,
                "\\": n
            }
        }),
        e.defineMIME("text/x-cassandra", {
            name: "sql",
            client: {},
            keywords: i("use select from using consistency where limit first reversed first and in insert into values using consistency ttl update set delete truncate begin batch apply create keyspace with columnfamily primary key index on drop alter type add any one quorum all local_quorum each_quorum"),
            builtin: i("ascii bigint blob boolean counter decimal double float int text timestamp uuid varchar varint"),
            atoms: i("false true"),
            operatorChars: /^[<>=]/,
            dateSQL: {},
            support: i("commentSlashSlash decimallessFloat"),
            hooks: {}
        }),
        e.defineMIME("text/x-plsql", {
            name: "sql",
            client: i("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
            keywords: i("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
            builtin: i("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least lenght lenghtb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
            operatorChars: /^[*+\-%<>!=~]/,
            dateSQL: i("date time timestamp"),
            support: i("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
        }),
        e.defineMIME("text/x-hive", {
            name: "sql",
            keywords: i("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external false fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger true unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with"),
            builtin: i("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype"),
            atoms: i("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: i("date timestamp"),
            support: i("ODBCdotTable doubleQuote binaryNumber hexNumber")
        })
    } ()
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    function t(e) {
        for (var t = {},
        r = e.split(" "), n = 0; n < r.length; ++n) t[r[n]] = !0;
        return t
    }
    function r(e, t) {
        if (!t.startOfLine) return ! 1;
        for (;;) {
            if (!e.skipTo("\\")) {
                e.skipToEnd(),
                t.tokenize = null;
                break
            }
            if (e.next(), e.eol()) {
                t.tokenize = r;
                break
            }
        }
        return "meta"
    }
    function n(e, t) {
        if (e.backUp(1), e.match(/(R|u8R|uR|UR|LR)/)) {
            var r = e.match(/"([^\s\\()]{0,16})\(/);
            return r ? (t.cpp11RawStringDelim = r[1], t.tokenize = o, o(e, t)) : !1
        }
        return e.match(/(u8|u|U|L)/) ? e.match(/["']/, !1) ? "string": !1 : (e.next(), !1)
    }
    function i(e, t) {
        for (var r; null != (r = e.next());) if ('"' == r && !e.eat('"')) {
            t.tokenize = null;
            break
        }
        return "string"
    }
    function o(e, t) {
        var r = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&"),
        n = e.match(new RegExp(".*?\\)" + r + '"'));
        return n ? t.tokenize = null: e.skipToEnd(),
        "string"
    }
    function a(t, r) {
        function n(e) {
            if (e) for (var t in e) e.hasOwnProperty(t) && i.push(t)
        }
        "string" == typeof t && (t = [t]);
        var i = [];
        n(r.keywords),
        n(r.builtin),
        n(r.atoms),
        i.length && (r.helperType = t[0], e.registerHelper("hintWords", t[0], i));
        for (var o = 0; o < t.length; ++o) e.defineMIME(t[o], r)
    }
    function s(e, t) {
        for (var r = !1; ! e.eol();) {
            if (!r && e.match('"""')) {
                t.tokenize = null;
                break
            }
            r = "\\" == e.next() && !r
        }
        return "string"
    }
    e.defineMode("clike",
    function(t, r) {
        function n(e, t) {
            var r = e.next();
            if (v[r]) {
                var n = v[r](e, t);
                if (n !== !1) return n
            }
            if ('"' == r || "'" == r) return t.tokenize = i(r),
            t.tokenize(e, t);
            if (/[\[\]{}\(\),;\:\.]/.test(r)) return c = r,
            null;
            if (/\d/.test(r)) return e.eatWhile(/[\w\.]/),
            "number";
            if ("/" == r) {
                if (e.eat("*")) return t.tokenize = o,
                o(e, t);
                if (e.eat("/")) return e.skipToEnd(),
                "comment"
            }
            if (x.test(r)) return e.eatWhile(x),
            "operator";
            e.eatWhile(/[\w\$_\xa1-\uffff]/);
            var a = e.current();
            return m.propertyIsEnumerable(a) ? (p.propertyIsEnumerable(a) && (c = "newstatement"), "keyword") : h.propertyIsEnumerable(a) ? (p.propertyIsEnumerable(a) && (c = "newstatement"), "builtin") : g.propertyIsEnumerable(a) ? "atom": "variable"
        }
        function i(e) {
            return function(t, r) {
                for (var n, i = !1,
                o = !1; null != (n = t.next());) {
                    if (n == e && !i) {
                        o = !0;
                        break
                    }
                    i = !i && "\\" == n
                }
                return (o || !i && !b) && (r.tokenize = null),
                "string"
            }
        }
        function o(e, t) {
            for (var r, n = !1; r = e.next();) {
                if ("/" == r && n) {
                    t.tokenize = null;
                    break
                }
                n = "*" == r
            }
            return "comment"
        }
        function a(e, t, r, n, i) {
            this.indented = e,
            this.column = t,
            this.type = r,
            this.align = n,
            this.prev = i
        }
        function s(e, t, r) {
            var n = e.indented;
            return e.context && "statement" == e.context.type && (n = e.context.indented),
            e.context = new a(n, t, r, null, e.context)
        }
        function l(e) {
            var t = e.context.type;
            return (")" == t || "]" == t || "}" == t) && (e.indented = e.context.indented),
            e.context = e.context.prev
        }
        var c, u = t.indentUnit,
        d = r.statementIndentUnit || u,
        f = r.dontAlignCalls,
        m = r.keywords || {},
        h = r.builtin || {},
        p = r.blockKeywords || {},
        g = r.atoms || {},
        v = r.hooks || {},
        b = r.multiLineStrings,
        y = r.indentStatements !== !1,
        x = /[+\-*&%=<>!?|\/]/;
        return {
            startState: function(e) {
                return {
                    tokenize: null,
                    context: new a((e || 0) - u, 0, "top", !1),
                    indented: 0,
                    startOfLine: !0
                }
            },
            token: function(e, t) {
                var r = t.context;
                if (e.sol() && (null == r.align && (r.align = !1), t.indented = e.indentation(), t.startOfLine = !0), e.eatSpace()) return null;
                c = null;
                var i = (t.tokenize || n)(e, t);
                if ("comment" == i || "meta" == i) return i;
                if (null == r.align && (r.align = !0), ";" != c && ":" != c && "," != c || "statement" != r.type) if ("{" == c) s(t, e.column(), "}");
                else if ("[" == c) s(t, e.column(), "]");
                else if ("(" == c) s(t, e.column(), ")");
                else if ("}" == c) {
                    for (;
                    "statement" == r.type;) r = l(t);
                    for ("}" == r.type && (r = l(t));
                    "statement" == r.type;) r = l(t)
                } else c == r.type ? l(t) : y && (("}" == r.type || "top" == r.type) && ";" != c || "statement" == r.type && "newstatement" == c) && s(t, e.column(), "statement");
                else l(t);
                return t.startOfLine = !1,
                i
            },
            indent: function(t, r) {
                if (t.tokenize != n && null != t.tokenize) return e.Pass;
                var i = t.context,
                o = r && r.charAt(0);
                "statement" == i.type && "}" == o && (i = i.prev);
                var a = o == i.type;
                return "statement" == i.type ? i.indented + ("{" == o ? 0 : d) : !i.align || f && ")" == i.type ? ")" != i.type || a ? i.indented + (a ? 0 : u) : i.indented + d: i.column + (a ? 0 : 1)
            },
            electricChars: "{}",
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            lineComment: "//",
            fold: "brace"
        }
    });
    var l = "auto if break int case long char register continue return default short do sizeof double static else struct entry switch extern typedef float union for unsigned goto while enum void const signed volatile";
    a(["text/x-csrc", "text/x-c", "text/x-chdr"], {
        name: "clike",
        keywords: t(l),
        blockKeywords: t("case do else for if switch while struct"),
        atoms: t("null"),
        hooks: {
            "#": r
        },
        modeProps: {
            fold: ["brace", "include"]
        }
    }),
    a(["text/x-c++src", "text/x-c++hdr"], {
        name: "clike",
        keywords: t(l + " asm dynamic_cast namespace reinterpret_cast try bool explicit new static_cast typeid catch operator template typename class friend private this using const_cast inline public throw virtual delete mutable protected wchar_t alignas alignof constexpr decltype nullptr noexcept thread_local final static_assert override"),
        blockKeywords: t("catch class do else finally for if struct switch try while"),
        atoms: t("true false null"),
        hooks: {
            "#": r,
            u: n,
            U: n,
            L: n,
            R: n
        },
        modeProps: {
            fold: ["brace", "include"]
        }
    }),
    a("text/x-java", {
        name: "clike",
        keywords: t("abstract assert boolean break byte case catch char class const continue default do double else enum extends final finally float for goto if implements import instanceof int interface long native new package private protected public return short static strictfp super switch synchronized this throw throws transient try void volatile while"),
        blockKeywords: t("catch class do else finally for if switch try while"),
        atoms: t("true false null"),
        hooks: {
            "@": function(e) {
                return e.eatWhile(/[\w\$_]/),
                "meta"
            }
        },
        modeProps: {
            fold: ["brace", "import"]
        }
    }),
    a("text/x-csharp", {
        name: "clike",
        keywords: t("abstract as base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
        blockKeywords: t("catch class do else finally for foreach if struct switch try while"),
        builtin: t("Boolean Byte Char DateTime DateTimeOffset Decimal Double Guid Int16 Int32 Int64 Object SByte Single String TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
        atoms: t("true false null"),
        hooks: {
            "@": function(e, t) {
                return e.eat('"') ? (t.tokenize = i, i(e, t)) : (e.eatWhile(/[\w\$_]/), "meta")
            }
        }
    }),
    a("text/x-scala", {
        name: "clike",
        keywords: t("abstract case catch class def do else extends false final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try trye type val var while with yield _ : = => <- <: <% >: # @ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector :: #:: Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
        multiLineStrings: !0,
        blockKeywords: t("catch class do else finally for forSome if match switch try while"),
        atoms: t("true false null"),
        indentStatements: !1,
        hooks: {
            "@": function(e) {
                return e.eatWhile(/[\w\$_]/),
                "meta"
            },
            '"': function(e, t) {
                return e.match('""') ? (t.tokenize = s, t.tokenize(e, t)) : !1
            },
            "'": function(e) {
                return e.eatWhile(/[\w\$_\xa1-\uffff]/),
                "atom"
            }
        }
    }),
    a(["x-shader/x-vertex", "x-shader/x-fragment"], {
        name: "clike",
        keywords: t("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4 sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),
        blockKeywords: t("for while do if else struct"),
        builtin: t("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
        atoms: t("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
        hooks: {
            "#": r
        },
        modeProps: {
            fold: ["brace", "include"]
        }
    }),
    a("text/x-nesc", {
        name: "clike",
        keywords: t(l + "as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),
        blockKeywords: t("case do else for if switch while struct"),
        atoms: t("null"),
        hooks: {
            "#": r
        },
        modeProps: {
            fold: ["brace", "include"]
        }
    }),
    a("text/x-objectivec", {
        name: "clike",
        keywords: t(l + "inline restrict _Bool _Complex _Imaginery BOOL Class bycopy byref id IMP in inout nil oneway out Protocol SEL self super atomic nonatomic retain copy readwrite readonly"),
        atoms: t("YES NO NULL NILL ON OFF"),
        hooks: {
            "@": function(e) {
                return e.eatWhile(/[\w\$]/),
                "keyword"
            },
            "#": r
        },
        modeProps: {
            fold: "brace"
        }
    })
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../clike/clike")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../htmlmixed/htmlmixed", "../clike/clike"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    function t(e) {
        for (var t = {},
        r = e.split(" "), n = 0; n < r.length; ++n) t[r[n]] = !0;
        return t
    }
    function r(e, t) {
        return 0 == e.length ? n(t) : function(i, o) {
            for (var a = e[0], s = 0; s < a.length; s++) if (i.match(a[s][0])) return o.tokenize = r(e.slice(1), t),
            a[s][1];
            return o.tokenize = n(t),
            "string"
        }
    }
    function n(e) {
        return function(t, r) {
            return i(t, r, e)
        }
    }
    function i(e, t, n) {
        if (e.match("${", !1) || e.match("{$", !1)) return t.tokenize = null,
        "string";
        if (e.match(/^\$[a-zA-Z_][a-zA-Z0-9_]*/)) return e.match("[", !1) && (t.tokenize = r([[["[", null]], [[/\d[\w\.]*/, "number"], [/\$[a-zA-Z_][a-zA-Z0-9_]*/, "variable-2"], [/[\w\$]+/, "variable"]], [["]", null]]], n)),
        e.match(/\-\>\w/, !1) && (t.tokenize = r([[["->", null]], [[/[\w]+/, "variable"]]], n)),
        "variable-2";
        for (var i = !1; ! e.eol() && (i || !e.match("{$", !1) && !e.match(/^(\$[a-zA-Z_][a-zA-Z0-9_]*|\$\{)/, !1));) {
            if (!i && e.match(n)) {
                t.tokenize = null,
                t.tokStack.pop(),
                t.tokStack.pop();
                break
            }
            i = "\\" == e.next() && !i
        }
        return "string"
    }
    var o = "abstract and array as break case catch class clone const continue declare default do else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach function global goto if implements interface instanceof namespace new or private protected public static switch throw trait try use var while xor die echo empty exit eval include include_once isset list require require_once return print unset __halt_compiler self static parent yield insteadof finally",
    a = "true false null TRUE FALSE NULL __CLASS__ __DIR__ __FILE__ __LINE__ __METHOD__ __FUNCTION__ __NAMESPACE__ __TRAIT__",
    s = "func_num_args func_get_arg func_get_args strlen strcmp strncmp strcasecmp strncasecmp each error_reporting define defined trigger_error user_error set_error_handler restore_error_handler get_declared_classes get_loaded_extensions extension_loaded get_extension_funcs debug_backtrace constant bin2hex hex2bin sleep usleep time mktime gmmktime strftime gmstrftime strtotime date gmdate getdate localtime checkdate flush wordwrap htmlspecialchars htmlentities html_entity_decode md5 md5_file crc32 getimagesize image_type_to_mime_type phpinfo phpversion phpcredits strnatcmp strnatcasecmp substr_count strspn strcspn strtok strtoupper strtolower strpos strrpos strrev hebrev hebrevc nl2br basename dirname pathinfo stripslashes stripcslashes strstr stristr strrchr str_shuffle str_word_count strcoll substr substr_replace quotemeta ucfirst ucwords strtr addslashes addcslashes rtrim str_replace str_repeat count_chars chunk_split trim ltrim strip_tags similar_text explode implode setlocale localeconv parse_str str_pad chop strchr sprintf printf vprintf vsprintf sscanf fscanf parse_url urlencode urldecode rawurlencode rawurldecode readlink linkinfo link unlink exec system escapeshellcmd escapeshellarg passthru shell_exec proc_open proc_close rand srand getrandmax mt_rand mt_srand mt_getrandmax base64_decode base64_encode abs ceil floor round is_finite is_nan is_infinite bindec hexdec octdec decbin decoct dechex base_convert number_format fmod ip2long long2ip getenv putenv getopt microtime gettimeofday getrusage uniqid quoted_printable_decode set_time_limit get_cfg_var magic_quotes_runtime set_magic_quotes_runtime get_magic_quotes_gpc get_magic_quotes_runtime import_request_variables error_log serialize unserialize memory_get_usage var_dump var_export debug_zval_dump print_r highlight_file show_source highlight_string ini_get ini_get_all ini_set ini_alter ini_restore get_include_path set_include_path restore_include_path setcookie header headers_sent connection_aborted connection_status ignore_user_abort parse_ini_file is_uploaded_file move_uploaded_file intval floatval doubleval strval gettype settype is_null is_resource is_bool is_long is_float is_int is_integer is_double is_real is_numeric is_string is_array is_object is_scalar ereg ereg_replace eregi eregi_replace split spliti join sql_regcase dl pclose popen readfile rewind rmdir umask fclose feof fgetc fgets fgetss fread fopen fpassthru ftruncate fstat fseek ftell fflush fwrite fputs mkdir rename copy tempnam tmpfile file file_get_contents stream_select stream_context_create stream_context_set_params stream_context_set_option stream_context_get_options stream_filter_prepend stream_filter_append fgetcsv flock get_meta_tags stream_set_write_buffer set_file_buffer set_socket_blocking stream_set_blocking socket_set_blocking stream_get_meta_data stream_register_wrapper stream_wrapper_register stream_set_timeout socket_set_timeout socket_get_status realpath fnmatch fsockopen pfsockopen pack unpack get_browser crypt opendir closedir chdir getcwd rewinddir readdir dir glob fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype file_exists is_writable is_writeable is_readable is_executable is_file is_dir is_link stat lstat chown touch clearstatcache mail ob_start ob_flush ob_clean ob_end_flush ob_end_clean ob_get_flush ob_get_clean ob_get_length ob_get_level ob_get_status ob_get_contents ob_implicit_flush ob_list_handlers ksort krsort natsort natcasesort asort arsort sort rsort usort uasort uksort shuffle array_walk count end prev next reset current key min max in_array array_search extract compact array_fill range array_multisort array_push array_pop array_shift array_unshift array_splice array_slice array_merge array_merge_recursive array_keys array_values array_count_values array_reverse array_reduce array_pad array_flip array_change_key_case array_rand array_unique array_intersect array_intersect_assoc array_diff array_diff_assoc array_sum array_filter array_map array_chunk array_key_exists pos sizeof key_exists assert assert_options version_compare ftok str_rot13 aggregate session_name session_module_name session_save_path session_id session_regenerate_id session_decode session_register session_unregister session_is_registered session_encode session_start session_destroy session_unset session_set_save_handler session_cache_limiter session_cache_expire session_set_cookie_params session_get_cookie_params session_write_close preg_match preg_match_all preg_replace preg_replace_callback preg_split preg_quote preg_grep overload ctype_alnum ctype_alpha ctype_cntrl ctype_digit ctype_lower ctype_graph ctype_print ctype_punct ctype_space ctype_upper ctype_xdigit virtual apache_request_headers apache_note apache_lookup_uri apache_child_terminate apache_setenv apache_response_headers apache_get_version getallheaders mysql_connect mysql_pconnect mysql_close mysql_select_db mysql_create_db mysql_drop_db mysql_query mysql_unbuffered_query mysql_db_query mysql_list_dbs mysql_list_tables mysql_list_fields mysql_list_processes mysql_error mysql_errno mysql_affected_rows mysql_insert_id mysql_result mysql_num_rows mysql_num_fields mysql_fetch_row mysql_fetch_array mysql_fetch_assoc mysql_fetch_object mysql_data_seek mysql_fetch_lengths mysql_fetch_field mysql_field_seek mysql_free_result mysql_field_name mysql_field_table mysql_field_len mysql_field_type mysql_field_flags mysql_escape_string mysql_real_escape_string mysql_stat mysql_thread_id mysql_client_encoding mysql_get_client_info mysql_get_host_info mysql_get_proto_info mysql_get_server_info mysql_info mysql mysql_fieldname mysql_fieldtable mysql_fieldlen mysql_fieldtype mysql_fieldflags mysql_selectdb mysql_createdb mysql_dropdb mysql_freeresult mysql_numfields mysql_numrows mysql_listdbs mysql_listtables mysql_listfields mysql_db_name mysql_dbname mysql_tablename mysql_table_name pg_connect pg_pconnect pg_close pg_connection_status pg_connection_busy pg_connection_reset pg_host pg_dbname pg_port pg_tty pg_options pg_ping pg_query pg_send_query pg_cancel_query pg_fetch_result pg_fetch_row pg_fetch_assoc pg_fetch_array pg_fetch_object pg_fetch_all pg_affected_rows pg_get_result pg_result_seek pg_result_status pg_free_result pg_last_oid pg_num_rows pg_num_fields pg_field_name pg_field_num pg_field_size pg_field_type pg_field_prtlen pg_field_is_null pg_get_notify pg_get_pid pg_result_error pg_last_error pg_last_notice pg_put_line pg_end_copy pg_copy_to pg_copy_from pg_trace pg_untrace pg_lo_create pg_lo_unlink pg_lo_open pg_lo_close pg_lo_read pg_lo_write pg_lo_read_all pg_lo_import pg_lo_export pg_lo_seek pg_lo_tell pg_escape_string pg_escape_bytea pg_unescape_bytea pg_client_encoding pg_set_client_encoding pg_meta_data pg_convert pg_insert pg_update pg_delete pg_select pg_exec pg_getlastoid pg_cmdtuples pg_errormessage pg_numrows pg_numfields pg_fieldname pg_fieldsize pg_fieldtype pg_fieldnum pg_fieldprtlen pg_fieldisnull pg_freeresult pg_result pg_loreadall pg_locreate pg_lounlink pg_loopen pg_loclose pg_loread pg_lowrite pg_loimport pg_loexport http_response_code get_declared_traits getimagesizefromstring socket_import_stream stream_set_chunk_size trait_exists header_register_callback class_uses session_status session_register_shutdown echo print global static exit array empty eval isset unset die include require include_once require_once json_decode json_encode json_last_error json_last_error_msg curl_close curl_copy_handle curl_errno curl_error curl_escape curl_exec curl_file_create curl_getinfo curl_init curl_multi_add_handle curl_multi_close curl_multi_exec curl_multi_getcontent curl_multi_info_read curl_multi_init curl_multi_remove_handle curl_multi_select curl_multi_setopt curl_multi_strerror curl_pause curl_reset curl_setopt_array curl_setopt curl_share_close curl_share_init curl_share_setopt curl_strerror curl_unescape curl_version mysqli_affected_rows mysqli_autocommit mysqli_change_user mysqli_character_set_name mysqli_close mysqli_commit mysqli_connect_errno mysqli_connect_error mysqli_connect mysqli_data_seek mysqli_debug mysqli_dump_debug_info mysqli_errno mysqli_error_list mysqli_error mysqli_fetch_all mysqli_fetch_array mysqli_fetch_assoc mysqli_fetch_field_direct mysqli_fetch_field mysqli_fetch_fields mysqli_fetch_lengths mysqli_fetch_object mysqli_fetch_row mysqli_field_count mysqli_field_seek mysqli_field_tell mysqli_free_result mysqli_get_charset mysqli_get_client_info mysqli_get_client_stats mysqli_get_client_version mysqli_get_connection_stats mysqli_get_host_info mysqli_get_proto_info mysqli_get_server_info mysqli_get_server_version mysqli_info mysqli_init mysqli_insert_id mysqli_kill mysqli_more_results mysqli_multi_query mysqli_next_result mysqli_num_fields mysqli_num_rows mysqli_options mysqli_ping mysqli_prepare mysqli_query mysqli_real_connect mysqli_real_escape_string mysqli_real_query mysqli_reap_async_query mysqli_refresh mysqli_rollback mysqli_select_db mysqli_set_charset mysqli_set_local_infile_default mysqli_set_local_infile_handler mysqli_sqlstate mysqli_ssl_set mysqli_stat mysqli_stmt_init mysqli_store_result mysqli_thread_id mysqli_thread_safe mysqli_use_result mysqli_warning_count";
    e.registerHelper("hintWords", "php", [o, a, s].join(" ").split(" ")),
    e.registerHelper("wordChars", "php", /[\w$]/);
    var l = {
        name: "clike",
        helperType: "php",
        keywords: t(o),
        blockKeywords: t("catch do else elseif for foreach if switch try while finally"),
        atoms: t(a),
        builtin: t(s),
        multiLineStrings: !0,
        hooks: {
            $: function(e) {
                return e.eatWhile(/[\w\$_]/),
                "variable-2"
            },
            "<": function(e, t) {
                if (e.match(/<</)) {
                    e.eatWhile(/[\w\.]/);
                    var r = e.current().slice(3);
                    if (r) return (t.tokStack || (t.tokStack = [])).push(r, 0),
                    t.tokenize = n(r),
                    "string"
                }
                return ! 1
            },
            "#": function(e) {
                for (; ! e.eol() && !e.match("?>", !1);) e.next();
                return "comment"
            },
            "/": function(e) {
                if (e.eat("/")) {
                    for (; ! e.eol() && !e.match("?>", !1);) e.next();
                    return "comment"
                }
                return ! 1
            },
            '"': function(e, t) {
                return (t.tokStack || (t.tokStack = [])).push('"', 0),
                t.tokenize = n('"'),
                "string"
            },
            "{": function(e, t) {
                return t.tokStack && t.tokStack.length && t.tokStack[t.tokStack.length - 1]++,
                !1
            },
            "}": function(e, t) {
                return t.tokStack && t.tokStack.length > 0 && !--t.tokStack[t.tokStack.length - 1] && (t.tokenize = n(t.tokStack[t.tokStack.length - 2])),
                !1
            }
        }
    };
    e.defineMode("php",
    function(t, r) {
        function n(e, t) {
            var r = t.curMode == o;
            if (e.sol() && t.pending && '"' != t.pending && "'" != t.pending && (t.pending = null), r) return r && null == t.php.tokenize && e.match("?>") ? (t.curMode = i, t.curState = t.html, "meta") : o.token(e, t.curState);
            if (e.match(/^<\?\w*/)) return t.curMode = o,
            t.curState = t.php,
            "meta";
            if ('"' == t.pending || "'" == t.pending) {
                for (; ! e.eol() && e.next() != t.pending;);
                var n = "string"
            } else if (t.pending && e.pos < t.pending.end) {
                e.pos = t.pending.end;
                var n = t.pending.style
            } else var n = i.token(e, t.curState);
            t.pending && (t.pending = null);
            var a, s = e.current(),
            l = s.search(/<\?/);
            return - 1 != l && ("string" == n && (a = s.match(/[\'\"]$/)) && !/\?>/.test(s) ? t.pending = a[0] : t.pending = {
                end: e.pos,
                style: n
            },
            e.backUp(s.length - l)),
            n
        }
        var i = e.getMode(t, "text/html"),
        o = e.getMode(t, l);
        return {
            startState: function() {
                var t = e.startState(i),
                n = e.startState(o);
                return {
                    html: t,
                    php: n,
                    curMode: r.startOpen ? o: i,
                    curState: r.startOpen ? n: t,
                    pending: null
                }
            },
            copyState: function(t) {
                var r, n = t.html,
                a = e.copyState(i, n),
                s = t.php,
                l = e.copyState(o, s);
                return r = t.curMode == i ? a: l,
                {
                    html: a,
                    php: l,
                    curMode: t.curMode,
                    curState: r,
                    pending: t.pending
                }
            },
            token: n,
            indent: function(e, t) {
                return e.curMode != o && /^\s*<\//.test(t) || e.curMode == o && /^\?>/.test(t) ? i.indent(e.html, t) : e.curMode.indent(e.curState, t)
            },
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            lineComment: "//",
            innerMode: function(e) {
                return {
                    state: e.curState,
                    mode: e.curMode
                }
            }
        }
    },
    "htmlmixed", "clike"),
    e.defineMIME("application/x-httpd-php", "php"),
    e.defineMIME("application/x-httpd-php-open", {
        name: "php",
        startOpen: !0
    }),
    e.defineMIME("text/x-php", l)
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("xml",
    function(t, r) {
        function n(e, t) {
            function r(r) {
                return t.tokenize = r,
                r(e, t)
            }
            var n = e.next();
            if ("<" == n) return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? r(a("atom", "]]>")) : null: e.match("--") ? r(a("comment", "-->")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), r(s(1))) : null: e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = a("meta", "?>"), "meta") : (_ = e.eat("/") ? "closeTag": "openTag", t.tokenize = i, "tag bracket");
            if ("&" == n) {
                var o;
                return o = e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";"),
                o ? "atom": "error"
            }
            return e.eatWhile(/[^&<]/),
            null
        }
        function i(e, t) {
            var r = e.next();
            if (">" == r || "/" == r && e.eat(">")) return t.tokenize = n,
            _ = ">" == r ? "endTag": "selfcloseTag",
            "tag bracket";
            if ("=" == r) return _ = "equals",
            null;
            if ("<" == r) {
                t.tokenize = n,
                t.state = d,
                t.tagName = t.tagStart = null;
                var i = t.tokenize(e, t);
                return i ? i + " tag error": "tag error"
            }
            return /[\'\"]/.test(r) ? (t.tokenize = o(r), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
        }
        function o(e) {
            var t = function(t, r) {
                for (; ! t.eol();) if (t.next() == e) {
                    r.tokenize = i;
                    break
                }
                return "string"
            };
            return t.isInAttribute = !0,
            t
        }
        function a(e, t) {
            return function(r, i) {
                for (; ! r.eol();) {
                    if (r.match(t)) {
                        i.tokenize = n;
                        break
                    }
                    r.next()
                }
                return e
            }
        }
        function s(e) {
            return function(t, r) {
                for (var i; null != (i = t.next());) {
                    if ("<" == i) return r.tokenize = s(e + 1),
                    r.tokenize(t, r);
                    if (">" == i) {
                        if (1 == e) {
                            r.tokenize = n;
                            break
                        }
                        return r.tokenize = s(e - 1),
                        r.tokenize(t, r)
                    }
                }
                return "meta"
            }
        }
        function l(e, t, r) {
            this.prev = e.context,
            this.tagName = t,
            this.indent = e.indented,
            this.startOfLine = r,
            (S.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0)
        }
        function c(e) {
            e.context && (e.context = e.context.prev)
        }
        function u(e, t) {
            for (var r;;) {
                if (!e.context) return;
                if (r = e.context.tagName, !S.contextGrabbers.hasOwnProperty(r) || !S.contextGrabbers[r].hasOwnProperty(t)) return;
                c(e)
            }
        }
        function d(e, t, r) {
            return "openTag" == e ? (r.tagStart = t.column(), f) : "closeTag" == e ? m: d
        }
        function f(e, t, r) {
            return "word" == e ? (r.tagName = t.current(), C = "tag", g) : (C = "error", f)
        }
        function m(e, t, r) {
            if ("word" == e) {
                var n = t.current();
                return r.context && r.context.tagName != n && S.implicitlyClosed.hasOwnProperty(r.context.tagName) && c(r),
                r.context && r.context.tagName == n ? (C = "tag", h) : (C = "tag error", p)
            }
            return C = "error",
            p
        }
        function h(e, t, r) {
            return "endTag" != e ? (C = "error", h) : (c(r), d)
        }
        function p(e, t, r) {
            return C = "error",
            h(e, t, r)
        }
        function g(e, t, r) {
            if ("word" == e) return C = "attribute",
            v;
            if ("endTag" == e || "selfcloseTag" == e) {
                var n = r.tagName,
                i = r.tagStart;
                return r.tagName = r.tagStart = null,
                "selfcloseTag" == e || S.autoSelfClosers.hasOwnProperty(n) ? u(r, n) : (u(r, n), r.context = new l(r, n, i == r.indented)),
                d
            }
            return C = "error",
            g
        }
        function v(e, t, r) {
            return "equals" == e ? b: (S.allowMissing || (C = "error"), g(e, t, r))
        }
        function b(e, t, r) {
            return "string" == e ? y: "word" == e && S.allowUnquoted ? (C = "string", g) : (C = "error", g(e, t, r))
        }
        function y(e, t, r) {
            return "string" == e ? y: g(e, t, r)
        }
        var x = t.indentUnit,
        k = r.multilineTagIndentFactor || 1,
        w = r.multilineTagIndentPastTag;
        null == w && (w = !0);
        var _, C, S = r.htmlMode ? {
            autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
                menuitem: !0
            },
            implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0
            },
            contextGrabbers: {
                dd: {
                    dd: !0,
                    dt: !0
                },
                dt: {
                    dd: !0,
                    dt: !0
                },
                li: {
                    li: !0
                },
                option: {
                    option: !0,
                    optgroup: !0
                },
                optgroup: {
                    optgroup: !0
                },
                p: {
                    address: !0,
                    article: !0,
                    aside: !0,
                    blockquote: !0,
                    dir: !0,
                    div: !0,
                    dl: !0,
                    fieldset: !0,
                    footer: !0,
                    form: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0,
                    header: !0,
                    hgroup: !0,
                    hr: !0,
                    menu: !0,
                    nav: !0,
                    ol: !0,
                    p: !0,
                    pre: !0,
                    section: !0,
                    table: !0,
                    ul: !0
                },
                rp: {
                    rp: !0,
                    rt: !0
                },
                rt: {
                    rp: !0,
                    rt: !0
                },
                tbody: {
                    tbody: !0,
                    tfoot: !0
                },
                td: {
                    td: !0,
                    th: !0
                },
                tfoot: {
                    tbody: !0
                },
                th: {
                    td: !0,
                    th: !0
                },
                thead: {
                    tbody: !0,
                    tfoot: !0
                },
                tr: {
                    tr: !0
                }
            },
            doNotIndent: {
                pre: !0
            },
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0
        }: {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1,
            caseFold: !1
        },
        T = r.alignCDATA;
        return {
            startState: function() {
                return {
                    tokenize: n,
                    state: d,
                    indented: 0,
                    tagName: null,
                    tagStart: null,
                    context: null
                }
            },
            token: function(e, t) {
                if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;
                _ = null;
                var r = t.tokenize(e, t);
                return (r || _) && "comment" != r && (C = null, t.state = t.state(_ || r, e, t), C && (r = "error" == C ? r + " error": C)),
                r
            },
            indent: function(t, r, o) {
                var a = t.context;
                if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + x;
                if (a && a.noIndent) return e.Pass;
                if (t.tokenize != i && t.tokenize != n) return o ? o.match(/^(\s*)/)[0].length: 0;
                if (t.tagName) return w ? t.tagStart + t.tagName.length + 2 : t.tagStart + x * k;
                if (T && /<!\[CDATA\[/.test(r)) return 0;
                var s = r && /^<(\/)?([\w_:\.-]*)/.exec(r);
                if (s && s[1]) for (; a;) {
                    if (a.tagName == s[2]) {
                        a = a.prev;
                        break
                    }
                    if (!S.implicitlyClosed.hasOwnProperty(a.tagName)) break;
                    a = a.prev
                } else if (s) for (; a;) {
                    var l = S.contextGrabbers[a.tagName];
                    if (!l || !l.hasOwnProperty(s[2])) break;
                    a = a.prev
                }
                for (; a && !a.startOfLine;) a = a.prev;
                return a ? a.indent + x: 0
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: "<!--",
            blockCommentEnd: "-->",
            configuration: r.htmlMode ? "html": "xml",
            helperType: r.htmlMode ? "html": "xml"
        }
    }),
    e.defineMIME("text/xml", "xml"),
    e.defineMIME("application/xml", "xml"),
    e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", {
        name: "xml",
        htmlMode: !0
    })
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../xml/xml"), require("../meta")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../meta"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("markdown",
    function(t, r) {
        function n(r) {
            if (e.findModeByName) {
                var n = e.findModeByName(r);
                n && (r = n.mime || n.mimes[0])
            }
            var i = e.getMode(t, r);
            return "null" == i.name ? null: i
        }
        function i(e, t, r) {
            return t.f = t.inline = r,
            r(e, t)
        }
        function o(e, t, r) {
            return t.f = t.block = r,
            r(e, t)
        }
        function a(e) {
            return e.linkTitle = !1,
            e.em = !1,
            e.strong = !1,
            e.strikethrough = !1,
            e.quote = 0,
            k || e.f != l || (e.f = m, e.block = s),
            e.trailingSpace = 0,
            e.trailingSpaceNewLine = !1,
            e.thisLineHasContent = !1,
            null
        }
        function s(e, t) {
            var o = e.sol(),
            a = t.list !== !1;
            t.list !== !1 && t.indentationDiff >= 0 ? (t.indentationDiff < 4 && (t.indentation -= t.indentationDiff), t.list = null) : t.list !== !1 && t.indentation > 0 ? (t.list = null, t.listDepth = Math.floor(t.indentation / 4)) : t.list !== !1 && (t.list = !1, t.listDepth = 0);
            var s = null;
            if (t.indentationDiff >= 4) return t.indentation -= 4,
            e.skipToEnd(),
            S;
            if (e.eatSpace()) return null;
            if (s = e.match(U)) return t.header = s[0].length <= 6 ? s[0].length: 6,
            r.highlightFormatting && (t.formatting = "header"),
            t.f = t.inline,
            d(t);
            if (t.prevLineHasContent && (s = e.match(W))) return t.header = "=" == s[0].charAt(0) ? 1 : 2,
            r.highlightFormatting && (t.formatting = "header"),
            t.f = t.inline,
            d(t);
            if (e.eat(">")) return t.indentation++,
            t.quote = o ? 1 : t.quote + 1,
            r.highlightFormatting && (t.formatting = "quote"),
            e.eatSpace(),
            d(t);
            if ("[" === e.peek()) return i(e, t, v);
            if (e.match(F, !0)) return q;
            if ((!t.prevLineHasContent || a) && (e.match(H, !1) || e.match(N, !1))) {
                var l = null;
                return e.match(H, !0) ? l = "ul": (e.match(N, !0), l = "ol"),
                t.indentation += 4,
                t.list = !0,
                t.listDepth++,
                r.taskLists && e.match(B, !1) && (t.taskList = !0),
                t.f = t.inline,
                r.highlightFormatting && (t.formatting = ["list", "list-" + l]),
                d(t)
            }
            return r.fencedCodeBlocks && e.match(/^```[ \t]*([\w+#]*)/, !0) ? (t.localMode = n(RegExp.$1), t.localMode && (t.localState = t.localMode.startState()), t.f = t.block = c, r.highlightFormatting && (t.formatting = "code-block"), t.code = !0, d(t)) : i(e, t, t.inline)
        }
        function l(e, t) {
            var r = w.token(e, t.htmlState);
            return (k && null === t.htmlState.tagStart && !t.htmlState.context || t.md_inside && e.current().indexOf(">") > -1) && (t.f = m, t.block = s, t.htmlState = null),
            r
        }
        function c(e, t) {
            return e.sol() && e.match("```", !1) ? (t.localMode = t.localState = null, t.f = t.block = u, null) : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), S)
        }
        function u(e, t) {
            e.match("```"),
            t.block = s,
            t.f = m,
            r.highlightFormatting && (t.formatting = "code-block"),
            t.code = !0;
            var n = d(t);
            return t.code = !1,
            n
        }
        function d(e) {
            var t = [];
            if (e.formatting) {
                t.push(z),
                "string" == typeof e.formatting && (e.formatting = [e.formatting]);
                for (var n = 0; n < e.formatting.length; n++) t.push(z + "-" + e.formatting[n]),
                "header" === e.formatting[n] && t.push(z + "-" + e.formatting[n] + "-" + e.header),
                "quote" === e.formatting[n] && t.push(!r.maxBlockquoteDepth || r.maxBlockquoteDepth >= e.quote ? z + "-" + e.formatting[n] + "-" + e.quote: "error")
            }
            if (e.taskOpen) return t.push("meta"),
            t.length ? t.join(" ") : null;
            if (e.taskClosed) return t.push("property"),
            t.length ? t.join(" ") : null;
            if (e.linkHref) return t.push(A),
            t.length ? t.join(" ") : null;
            if (e.strong && t.push(O), e.em && t.push($), e.strikethrough && t.push(R), e.linkText && t.push(D), e.code && t.push(S), e.header && (t.push(C), t.push(C + "-" + e.header)), e.quote && (t.push(T), t.push(!r.maxBlockquoteDepth || r.maxBlockquoteDepth >= e.quote ? T + "-" + e.quote: T + "-" + r.maxBlockquoteDepth)), e.list !== !1) {
                var i = (e.listDepth - 1) % 3;
                t.push(i ? 1 === i ? L: E: M)
            }
            return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a": "b")),
            t.length ? t.join(" ") : null
        }
        function f(e, t) {
            return e.match(V, !0) ? d(t) : void 0
        }
        function m(t, n) {
            var i = n.text(t, n);
            if ("undefined" != typeof i) return i;
            if (n.list) return n.list = null,
            d(n);
            if (n.taskList) {
                var a = "x" !== t.match(B, !0)[1];
                return a ? n.taskOpen = !0 : n.taskClosed = !0,
                r.highlightFormatting && (n.formatting = "task"),
                n.taskList = !1,
                d(n)
            }
            if (n.taskOpen = !1, n.taskClosed = !1, n.header && t.match(/^#+$/, !0)) return r.highlightFormatting && (n.formatting = "header"),
            d(n);
            var s = t.sol(),
            c = t.next();
            if ("\\" === c && (t.next(), r.highlightFormatting)) {
                var u = d(n);
                return u ? u + " formatting-escape": "formatting-escape"
            }
            if (n.linkTitle) {
                n.linkTitle = !1;
                var f = c;
                "(" === c && (f = ")"),
                f = (f + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                var m = "^\\s*(?:[^" + f + "\\\\]+|\\\\\\\\|\\\\.)" + f;
                if (t.match(new RegExp(m), !0)) return A
            }
            if ("`" === c) {
                var g = n.formatting;
                r.highlightFormatting && (n.formatting = "code");
                var v = d(n),
                b = t.pos;
                t.eatWhile("`");
                var y = 1 + t.pos - b;
                return n.code ? y === _ ? (n.code = !1, v) : (n.formatting = g, d(n)) : (_ = y, n.code = !0, d(n))
            }
            if (n.code) return d(n);
            if ("!" === c && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return t.match(/\[[^\]]*\]/),
            n.inline = n.f = p,
            j;
            if ("[" === c && t.match(/.*\](\(.*\)| ?\[.*\])/, !1)) return n.linkText = !0,
            r.highlightFormatting && (n.formatting = "link"),
            d(n);
            if ("]" === c && n.linkText && t.match(/\(.*\)| ?\[.*\]/, !1)) {
                r.highlightFormatting && (n.formatting = "link");
                var u = d(n);
                return n.linkText = !1,
                n.inline = n.f = p,
                u
            }
            if ("<" === c && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
                n.f = n.inline = h,
                r.highlightFormatting && (n.formatting = "link");
                var u = d(n);
                return u ? u += " ": u = "",
                u + I
            }
            if ("<" === c && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
                n.f = n.inline = h,
                r.highlightFormatting && (n.formatting = "link");
                var u = d(n);
                return u ? u += " ": u = "",
                u + P
            }
            if ("<" === c && t.match(/^\w/, !1)) {
                if ( - 1 != t.string.indexOf(">")) {
                    var x = t.string.substring(1, t.string.indexOf(">"));
                    /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(x) && (n.md_inside = !0)
                }
                return t.backUp(1),
                n.htmlState = e.startState(w),
                o(t, n, l)
            }
            if ("<" === c && t.match(/^\/\w*?>/)) return n.md_inside = !1,
            "tag";
            var k = !1;
            if (!r.underscoresBreakWords && "_" === c && "_" !== t.peek() && t.match(/(\w)/, !1)) {
                var C = t.pos - 2;
                if (C >= 0) {
                    var S = t.string.charAt(C);
                    "_" !== S && S.match(/(\w)/, !1) && (k = !0)
                }
            }
            if ("*" === c || "_" === c && !k) if (s && " " === t.peek());
            else {
                if (n.strong === c && t.eat(c)) {
                    r.highlightFormatting && (n.formatting = "strong");
                    var v = d(n);
                    return n.strong = !1,
                    v
                }
                if (!n.strong && t.eat(c)) return n.strong = c,
                r.highlightFormatting && (n.formatting = "strong"),
                d(n);
                if (n.em === c) {
                    r.highlightFormatting && (n.formatting = "em");
                    var v = d(n);
                    return n.em = !1,
                    v
                }
                if (!n.em) return n.em = c,
                r.highlightFormatting && (n.formatting = "em"),
                d(n)
            } else if (" " === c && (t.eat("*") || t.eat("_"))) {
                if (" " === t.peek()) return d(n);
                t.backUp(1)
            }
            if (r.strikethrough) if ("~" === c && t.eatWhile(c)) {
                if (n.strikethrough) {
                    r.highlightFormatting && (n.formatting = "strikethrough");
                    var v = d(n);
                    return n.strikethrough = !1,
                    v
                }
                if (t.match(/^[^\s]/, !1)) return n.strikethrough = !0,
                r.highlightFormatting && (n.formatting = "strikethrough"),
                d(n)
            } else if (" " === c && t.match(/^~~/, !0)) {
                if (" " === t.peek()) return d(n);
                t.backUp(2)
            }
            return " " === c && (t.match(/ +$/, !1) ? n.trailingSpace++:n.trailingSpace && (n.trailingSpaceNewLine = !0)),
            d(n)
        }
        function h(e, t) {
            var n = e.next();
            if (">" === n) {
                t.f = t.inline = m,
                r.highlightFormatting && (t.formatting = "link");
                var i = d(t);
                return i ? i += " ": i = "",
                i + I
            }
            return e.match(/^[^>]+/, !0),
            I
        }
        function p(e, t) {
            if (e.eatSpace()) return null;
            var n = e.next();
            return "(" === n || "[" === n ? (t.f = t.inline = g("(" === n ? ")": "]"), r.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, d(t)) : "error"
        }
        function g(e) {
            return function(t, n) {
                var i = t.next();
                if (i === e) {
                    n.f = n.inline = m,
                    r.highlightFormatting && (n.formatting = "link-string");
                    var o = d(n);
                    return n.linkHref = !1,
                    o
                }
                return t.match(x(e), !0) && t.backUp(1),
                n.linkHref = !0,
                d(n)
            }
        }
        function v(e, t) {
            return e.match(/^[^\]]*\]:/, !1) ? (t.f = b, e.next(), r.highlightFormatting && (t.formatting = "link"), t.linkText = !0, d(t)) : i(e, t, m)
        }
        function b(e, t) {
            if (e.match(/^\]:/, !0)) {
                t.f = t.inline = y,
                r.highlightFormatting && (t.formatting = "link");
                var n = d(t);
                return t.linkText = !1,
                n
            }
            return e.match(/^[^\]]+/, !0),
            D
        }
        function y(e, t) {
            return e.eatSpace() ? null: (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = m, A)
        }
        function x(e) {
            return K[e] || (e = (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), K[e] = new RegExp("^(?:[^\\\\]|\\\\.)*?(" + e + ")")),
            K[e]
        }
        var k = e.modes.hasOwnProperty("xml"),
        w = e.getMode(t, k ? {
            name: "xml",
            htmlMode: !0
        }: "text/plain");
        void 0 === r.highlightFormatting && (r.highlightFormatting = !1),
        void 0 === r.maxBlockquoteDepth && (r.maxBlockquoteDepth = 0),
        void 0 === r.underscoresBreakWords && (r.underscoresBreakWords = !0),
        void 0 === r.fencedCodeBlocks && (r.fencedCodeBlocks = !1),
        void 0 === r.taskLists && (r.taskLists = !1),
        void 0 === r.strikethrough && (r.strikethrough = !1);
        var _ = 0,
        C = "header",
        S = "comment",
        T = "quote",
        M = "variable-2",
        L = "variable-3",
        E = "keyword",
        q = "hr",
        j = "tag",
        z = "formatting",
        I = "link",
        P = "link",
        D = "link",
        A = "string",
        $ = "em",
        O = "strong",
        R = "strikethrough",
        F = /^([*\-=_])(?:\s*\1){2,}\s*$/,
        H = /^[*\-+]\s+/,
        N = /^[0-9]+\.\s+/,
        B = /^\[(x| )\](?=\s)/,
        U = /^#+/,
        W = /^(?:\={1,}|-{1,})$/,
        V = /^[^#!\[\]*_\\<>` "'(~]+/,
        K = [],
        Z = {
            startState: function() {
                return {
                    f: s,
                    prevLineHasContent: !1,
                    thisLineHasContent: !1,
                    block: s,
                    htmlState: null,
                    indentation: 0,
                    inline: m,
                    text: f,
                    formatting: !1,
                    linkText: !1,
                    linkHref: !1,
                    linkTitle: !1,
                    em: !1,
                    strong: !1,
                    header: 0,
                    taskList: !1,
                    list: !1,
                    listDepth: 0,
                    quote: 0,
                    trailingSpace: 0,
                    trailingSpaceNewLine: !1,
                    strikethrough: !1
                }
            },
            copyState: function(t) {
                return {
                    f: t.f,
                    prevLineHasContent: t.prevLineHasContent,
                    thisLineHasContent: t.thisLineHasContent,
                    block: t.block,
                    htmlState: t.htmlState && e.copyState(w, t.htmlState),
                    indentation: t.indentation,
                    localMode: t.localMode,
                    localState: t.localMode ? e.copyState(t.localMode, t.localState) : null,
                    inline: t.inline,
                    text: t.text,
                    formatting: !1,
                    linkTitle: t.linkTitle,
                    em: t.em,
                    strong: t.strong,
                    strikethrough: t.strikethrough,
                    header: t.header,
                    taskList: t.taskList,
                    list: t.list,
                    listDepth: t.listDepth,
                    quote: t.quote,
                    trailingSpace: t.trailingSpace,
                    trailingSpaceNewLine: t.trailingSpaceNewLine,
                    md_inside: t.md_inside
                }
            },
            token: function(e, t) {
                if (t.formatting = !1, e.sol()) {
                    var r = !!t.header;
                    if (t.header = 0, e.match(/^\s*$/, !0) || r) return t.prevLineHasContent = !1,
                    a(t),
                    r ? this.token(e, t) : null;
                    t.prevLineHasContent = t.thisLineHasContent,
                    t.thisLineHasContent = !0,
                    t.taskList = !1,
                    t.code = !1,
                    t.trailingSpace = 0,
                    t.trailingSpaceNewLine = !1,
                    t.f = t.block;
                    var n = e.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length,
                    i = 4 * Math.floor((n - t.indentation) / 4);
                    i > 4 && (i = 4);
                    var o = t.indentation + i;
                    if (t.indentationDiff = o - t.indentation, t.indentation = o, n > 0) return null
                }
                return t.f(e, t)
            },
            innerMode: function(e) {
                return e.block == l ? {
                    state: e.htmlState,
                    mode: w
                }: e.localState ? {
                    state: e.localState,
                    mode: e.localMode
                }: {
                    state: e,
                    mode: Z
                }
            },
            blankLine: a,
            getType: d,
            fold: "markdown"
        };
        return Z
    },
    "xml"),
    e.defineMIME("text/x-markdown", "markdown")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("javascript",
    function(t, r) {
        function n(e) {
            for (var t, r = !1,
            n = !1; null != (t = e.next());) {
                if (!r) {
                    if ("/" == t && !n) return;
                    "[" == t ? n = !0 : n && "]" == t && (n = !1)
                }
                r = !r && "\\" == t
            }
        }
        function i(e, t, r) {
            return pe = e,
            ge = r,
            t
        }
        function o(e, t) {
            var r = e.next();
            if ('"' == r || "'" == r) return t.tokenize = a(r),
            t.tokenize(e, t);
            if ("." == r && e.match(/^\d+(?:[eE][+\-]?\d+)?/)) return i("number", "number");
            if ("." == r && e.match("..")) return i("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(r)) return i(r);
            if ("=" == r && e.eat(">")) return i("=>", "operator");
            if ("0" == r && e.eat(/x/i)) return e.eatWhile(/[\da-f]/i),
            i("number", "number");
            if (/\d/.test(r)) return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
            i("number", "number");
            if ("/" == r) return e.eat("*") ? (t.tokenize = s, s(e, t)) : e.eat("/") ? (e.skipToEnd(), i("comment", "comment")) : "operator" == t.lastType || "keyword c" == t.lastType || "sof" == t.lastType || /^[\[{}\(,;:]$/.test(t.lastType) ? (n(e), e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/), i("regexp", "string-2")) : (e.eatWhile(Ce), i("operator", "operator", e.current()));
            if ("`" == r) return t.tokenize = l,
            l(e, t);
            if ("#" == r) return e.skipToEnd(),
            i("error", "error");
            if (Ce.test(r)) return e.eatWhile(Ce),
            i("operator", "operator", e.current());
            if (we.test(r)) {
                e.eatWhile(we);
                var o = e.current(),
                c = _e.propertyIsEnumerable(o) && _e[o];
                return c && "." != t.lastType ? i(c.type, c.style, o) : i("variable", "variable", o)
            }
        }
        function a(e) {
            return function(t, r) {
                var n, a = !1;
                if (ye && "@" == t.peek() && t.match(Se)) return r.tokenize = o,
                i("jsonld-keyword", "meta");
                for (; null != (n = t.next()) && (n != e || a);) a = !a && "\\" == n;
                return a || (r.tokenize = o),
                i("string", "string")
            }
        }
        function s(e, t) {
            for (var r, n = !1; r = e.next();) {
                if ("/" == r && n) {
                    t.tokenize = o;
                    break
                }
                n = "*" == r
            }
            return i("comment", "comment")
        }
        function l(e, t) {
            for (var r, n = !1; null != (r = e.next());) {
                if (!n && ("`" == r || "$" == r && e.eat("{"))) {
                    t.tokenize = o;
                    break
                }
                n = !n && "\\" == r
            }
            return i("quasi", "string-2", e.current())
        }
        function c(e, t) {
            t.fatArrowAt && (t.fatArrowAt = null);
            var r = e.string.indexOf("=>", e.start);
            if (! (0 > r)) {
                for (var n = 0,
                i = !1,
                o = r - 1; o >= 0; --o) {
                    var a = e.string.charAt(o),
                    s = Te.indexOf(a);
                    if (s >= 0 && 3 > s) {
                        if (!n) {++o;
                            break
                        }
                        if (0 == --n) break
                    } else if (s >= 3 && 6 > s)++n;
                    else if (we.test(a)) i = !0;
                    else {
                        if (/["'\/]/.test(a)) return;
                        if (i && !n) {++o;
                            break
                        }
                    }
                }
                i && !n && (t.fatArrowAt = o)
            }
        }
        function u(e, t, r, n, i, o) {
            this.indented = e,
            this.column = t,
            this.type = r,
            this.prev = i,
            this.info = o,
            null != n && (this.align = n)
        }
        function d(e, t) {
            for (var r = e.localVars; r; r = r.next) if (r.name == t) return ! 0;
            for (var n = e.context; n; n = n.prev) for (var r = n.vars; r; r = r.next) if (r.name == t) return ! 0
        }
        function f(e, t, r, n, i) {
            var o = e.cc;
            for (Le.state = e, Le.stream = i, Le.marked = null, Le.cc = o, Le.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);;) {
                var a = o.length ? o.pop() : xe ? w: k;
                if (a(r, n)) {
                    for (; o.length && o[o.length - 1].lex;) o.pop()();
                    return Le.marked ? Le.marked: "variable" == r && d(e, n) ? "variable-2": t
                }
            }
        }
        function m() {
            for (var e = arguments.length - 1; e >= 0; e--) Le.cc.push(arguments[e])
        }
        function h() {
            return m.apply(null, arguments),
            !0
        }
        function p(e) {
            function t(t) {
                for (var r = t; r; r = r.next) if (r.name == e) return ! 0;
                return ! 1
            }
            var n = Le.state;
            if (n.context) {
                if (Le.marked = "def", t(n.localVars)) return;
                n.localVars = {
                    name: e,
                    next: n.localVars
                }
            } else {
                if (t(n.globalVars)) return;
                r.globalVars && (n.globalVars = {
                    name: e,
                    next: n.globalVars
                })
            }
        }
        function g() {
            Le.state.context = {
                prev: Le.state.context,
                vars: Le.state.localVars
            },
            Le.state.localVars = Ee
        }
        function v() {
            Le.state.localVars = Le.state.context.vars,
            Le.state.context = Le.state.context.prev
        }
        function b(e, t) {
            var r = function() {
                var r = Le.state,
                n = r.indented;
                if ("stat" == r.lexical.type) n = r.lexical.indented;
                else for (var i = r.lexical; i && ")" == i.type && i.align; i = i.prev) n = i.indented;
                r.lexical = new u(n, Le.stream.column(), e, null, r.lexical, t)
            };
            return r.lex = !0,
            r
        }
        function y() {
            var e = Le.state;
            e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
        }
        function x(e) {
            function t(r) {
                return r == e ? h() : ";" == e ? m() : h(t)
            }
            return t
        }
        function k(e, t) {
            return "var" == e ? h(b("vardef", t.length), B, x(";"), y) : "keyword a" == e ? h(b("form"), w, k, y) : "keyword b" == e ? h(b("form"), k, y) : "{" == e ? h(b("}"), F, y) : ";" == e ? h() : "if" == e ? ("else" == Le.state.lexical.info && Le.state.cc[Le.state.cc.length - 1] == y && Le.state.cc.pop()(), h(b("form"), w, k, y, Z)) : "function" == e ? h(ee) : "for" == e ? h(b("form"), G, k, y) : "variable" == e ? h(b("stat"), I) : "switch" == e ? h(b("form"), w, b("}", "switch"), x("{"), F, y, y) : "case" == e ? h(w, x(":")) : "default" == e ? h(x(":")) : "catch" == e ? h(b("form"), g, x("("), te, x(")"), k, y, v) : "module" == e ? h(b("form"), g, ae, v, y) : "class" == e ? h(b("form"), re, y) : "export" == e ? h(b("form"), se, y) : "import" == e ? h(b("form"), le, y) : m(b("stat"), w, x(";"), y)
        }
        function w(e) {
            return C(e, !1)
        }
        function _(e) {
            return C(e, !0)
        }
        function C(e, t) {
            if (Le.state.fatArrowAt == Le.stream.start) {
                var r = t ? z: j;
                if ("(" == e) return h(g, b(")"), O(U, ")"), y, x("=>"), r, v);
                if ("variable" == e) return m(g, U, x("=>"), r, v)
            }
            var n = t ? L: M;
            return Me.hasOwnProperty(e) ? h(n) : "function" == e ? h(ee, n) : "keyword c" == e ? h(t ? T: S) : "(" == e ? h(b(")"), S, me, x(")"), y, n) : "operator" == e || "spread" == e ? h(t ? _: w) : "[" == e ? h(b("]"), de, y, n) : "{" == e ? R(D, "}", null, n) : "quasi" == e ? m(E, n) : h()
        }
        function S(e) {
            return e.match(/[;\}\)\],]/) ? m() : m(w)
        }
        function T(e) {
            return e.match(/[;\}\)\],]/) ? m() : m(_)
        }
        function M(e, t) {
            return "," == e ? h(w) : L(e, t, !1)
        }
        function L(e, t, r) {
            var n = 0 == r ? M: L,
            i = 0 == r ? w: _;
            return "=>" == e ? h(g, r ? z: j, v) : "operator" == e ? /\+\+|--/.test(t) ? h(n) : "?" == t ? h(w, x(":"), i) : h(i) : "quasi" == e ? m(E, n) : ";" != e ? "(" == e ? R(_, ")", "call", n) : "." == e ? h(P, n) : "[" == e ? h(b("]"), S, x("]"), y, n) : void 0 : void 0
        }
        function E(e, t) {
            return "quasi" != e ? m() : "${" != t.slice(t.length - 2) ? h(E) : h(w, q)
        }
        function q(e) {
            return "}" == e ? (Le.marked = "string-2", Le.state.tokenize = l, h(E)) : void 0
        }
        function j(e) {
            return c(Le.stream, Le.state),
            m("{" == e ? k: w)
        }
        function z(e) {
            return c(Le.stream, Le.state),
            m("{" == e ? k: _)
        }
        function I(e) {
            return ":" == e ? h(y, k) : m(M, x(";"), y)
        }
        function P(e) {
            return "variable" == e ? (Le.marked = "property", h()) : void 0
        }
        function D(e, t) {
            return "variable" == e || "keyword" == Le.style ? (Le.marked = "property", h("get" == t || "set" == t ? A: $)) : "number" == e || "string" == e ? (Le.marked = ye ? "property": Le.style + " property", h($)) : "jsonld-keyword" == e ? h($) : "[" == e ? h(w, x("]"), $) : void 0
        }
        function A(e) {
            return "variable" != e ? m($) : (Le.marked = "property", h(ee))
        }
        function $(e) {
            return ":" == e ? h(_) : "(" == e ? m(ee) : void 0
        }
        function O(e, t) {
            function r(n) {
                if ("," == n) {
                    var i = Le.state.lexical;
                    return "call" == i.info && (i.pos = (i.pos || 0) + 1),
                    h(e, r)
                }
                return n == t ? h() : h(x(t))
            }
            return function(n) {
                return n == t ? h() : m(e, r)
            }
        }
        function R(e, t, r) {
            for (var n = 3; n < arguments.length; n++) Le.cc.push(arguments[n]);
            return h(b(t, r), O(e, t), y)
        }
        function F(e) {
            return "}" == e ? h() : m(k, F)
        }
        function H(e) {
            return ke && ":" == e ? h(N) : void 0
        }
        function N(e) {
            return "variable" == e ? (Le.marked = "variable-3", h()) : void 0
        }
        function B() {
            return m(U, H, V, K)
        }
        function U(e, t) {
            return "variable" == e ? (p(t), h()) : "[" == e ? R(U, "]") : "{" == e ? R(W, "}") : void 0
        }
        function W(e, t) {
            return "variable" != e || Le.stream.match(/^\s*:/, !1) ? ("variable" == e && (Le.marked = "property"), h(x(":"), U, V)) : (p(t), h(V))
        }
        function V(e, t) {
            return "=" == t ? h(_) : void 0
        }
        function K(e) {
            return "," == e ? h(B) : void 0
        }
        function Z(e, t) {
            return "keyword b" == e && "else" == t ? h(b("form", "else"), k, y) : void 0
        }
        function G(e) {
            return "(" == e ? h(b(")"), X, x(")"), y) : void 0
        }
        function X(e) {
            return "var" == e ? h(B, x(";"), Y) : ";" == e ? h(Y) : "variable" == e ? h(Q) : m(w, x(";"), Y)
        }
        function Q(e, t) {
            return "in" == t || "of" == t ? (Le.marked = "keyword", h(w)) : h(M, Y)
        }
        function Y(e, t) {
            return ";" == e ? h(J) : "in" == t || "of" == t ? (Le.marked = "keyword", h(w)) : m(w, x(";"), J)
        }
        function J(e) {
            ")" != e && h(w)
        }
        function ee(e, t) {
            return "*" == t ? (Le.marked = "keyword", h(ee)) : "variable" == e ? (p(t), h(ee)) : "(" == e ? h(g, b(")"), O(te, ")"), y, k, v) : void 0
        }
        function te(e) {
            return "spread" == e ? h(te) : m(U, H)
        }
        function re(e, t) {
            return "variable" == e ? (p(t), h(ne)) : void 0
        }
        function ne(e, t) {
            return "extends" == t ? h(w, ne) : "{" == e ? h(b("}"), ie, y) : void 0
        }
        function ie(e, t) {
            return "variable" == e || "keyword" == Le.style ? (Le.marked = "property", "get" == t || "set" == t ? h(oe, ee, ie) : h(ee, ie)) : "*" == t ? (Le.marked = "keyword", h(ie)) : ";" == e ? h(ie) : "}" == e ? h() : void 0
        }
        function oe(e) {
            return "variable" != e ? m() : (Le.marked = "property", h())
        }
        function ae(e, t) {
            return "string" == e ? h(k) : "variable" == e ? (p(t), h(ue)) : void 0
        }
        function se(e, t) {
            return "*" == t ? (Le.marked = "keyword", h(ue, x(";"))) : "default" == t ? (Le.marked = "keyword", h(w, x(";"))) : m(k)
        }
        function le(e) {
            return "string" == e ? h() : m(ce, ue)
        }
        function ce(e, t) {
            return "{" == e ? R(ce, "}") : ("variable" == e && p(t), h())
        }
        function ue(e, t) {
            return "from" == t ? (Le.marked = "keyword", h(w)) : void 0
        }
        function de(e) {
            return "]" == e ? h() : m(_, fe)
        }
        function fe(e) {
            return "for" == e ? m(me, x("]")) : "," == e ? h(O(T, "]")) : m(O(_, "]"))
        }
        function me(e) {
            return "for" == e ? h(G, me) : "if" == e ? h(w, me) : void 0
        }
        function he(e, t) {
            return "operator" == e.lastType || "," == e.lastType || Ce.test(t.charAt(0)) || /[,.]/.test(t.charAt(0))
        }
        var pe, ge, ve = t.indentUnit,
        be = r.statementIndent,
        ye = r.jsonld,
        xe = r.json || ye,
        ke = r.typescript,
        we = r.wordCharacters || /[\w$\xa1-\uffff]/,
        _e = function() {
            function e(e) {
                return {
                    type: e,
                    style: "keyword"
                }
            }
            var t = e("keyword a"),
            r = e("keyword b"),
            n = e("keyword c"),
            i = e("operator"),
            o = {
                type: "atom",
                style: "atom"
            },
            a = {
                "if": e("if"),
                "while": t,
                "with": t,
                "else": r,
                "do": r,
                "try": r,
                "finally": r,
                "return": n,
                "break": n,
                "continue": n,
                "new": n,
                "delete": n,
                "throw": n,
                "debugger": n,
                "var": e("var"),
                "const": e("var"),
                let: e("var"),
                "function": e("function"),
                "catch": e("catch"),
                "for": e("for"),
                "switch": e("switch"),
                "case": e("case"),
                "default": e("default"),
                "in": i,
                "typeof": i,
                "instanceof": i,
                "true": o,
                "false": o,
                "null": o,
                undefined: o,
                NaN: o,
                Infinity: o,
                "this": e("this"),
                module: e("module"),
                "class": e("class"),
                "super": e("atom"),
                "yield": n,
                "export": e("export"),
                "import": e("import"),
                "extends": n
            };
            if (ke) {
                var s = {
                    type: "variable",
                    style: "variable-3"
                },
                l = {
                    "interface": e("interface"),
                    "extends": e("extends"),
                    constructor: e("constructor"),
                    "public": e("public"),
                    "private": e("private"),
                    "protected": e("protected"),
                    "static": e("static"),
                    string: s,
                    number: s,
                    bool: s,
                    any: s
                };
                for (var c in l) a[c] = l[c]
            }
            return a
        } (),
        Ce = /[+\-*&%=<>!?|~^]/,
        Se = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,
        Te = "([{}])",
        Me = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            "this": !0,
            "jsonld-keyword": !0
        },
        Le = {
            state: null,
            column: null,
            marked: null,
            cc: null
        },
        Ee = {
            name: "this",
            next: {
                name: "arguments"
            }
        };
        return y.lex = !0,
        {
            startState: function(e) {
                var t = {
                    tokenize: o,
                    lastType: "sof",
                    cc: [],
                    lexical: new u((e || 0) - ve, 0, "block", !1),
                    localVars: r.localVars,
                    context: r.localVars && {
                        vars: r.localVars
                    },
                    indented: 0
                };
                return r.globalVars && "object" == typeof r.globalVars && (t.globalVars = r.globalVars),
                t
            },
            token: function(e, t) {
                if (e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), c(e, t)), t.tokenize != s && e.eatSpace()) return null;
                var r = t.tokenize(e, t);
                return "comment" == pe ? r: (t.lastType = "operator" != pe || "++" != ge && "--" != ge ? pe: "incdec", f(t, r, pe, ge, e))
            },
            indent: function(t, n) {
                if (t.tokenize == s) return e.Pass;
                if (t.tokenize != o) return 0;
                var i = n && n.charAt(0),
                a = t.lexical;
                if (!/^\s*else\b/.test(n)) for (var l = t.cc.length - 1; l >= 0; --l) {
                    var c = t.cc[l];
                    if (c == y) a = a.prev;
                    else if (c != Z) break
                }
                "stat" == a.type && "}" == i && (a = a.prev),
                be && ")" == a.type && "stat" == a.prev.type && (a = a.prev);
                var u = a.type,
                d = i == u;
                return "vardef" == u ? a.indented + ("operator" == t.lastType || "," == t.lastType ? a.info + 1 : 0) : "form" == u && "{" == i ? a.indented: "form" == u ? a.indented + ve: "stat" == u ? a.indented + (he(t, n) ? be || ve: 0) : "switch" != a.info || d || 0 == r.doubleIndentSwitch ? a.align ? a.column + (d ? 0 : 1) : a.indented + (d ? 0 : ve) : a.indented + (/^(?:case|default)\b/.test(n) ? ve: 2 * ve)
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: xe ? null: "/*",
            blockCommentEnd: xe ? null: "*/",
            lineComment: xe ? null: "//",
            fold: "brace",
            helperType: xe ? "json": "javascript",
            jsonldMode: ye,
            jsonMode: xe
        }
    }),
    e.registerHelper("wordChars", "javascript", /[\w$]/),
    e.defineMIME("text/javascript", "javascript"),
    e.defineMIME("text/ecmascript", "javascript"),
    e.defineMIME("application/javascript", "javascript"),
    e.defineMIME("application/x-javascript", "javascript"),
    e.defineMIME("application/ecmascript", "javascript"),
    e.defineMIME("application/json", {
        name: "javascript",
        json: !0
    }),
    e.defineMIME("application/x-json", {
        name: "javascript",
        json: !0
    }),
    e.defineMIME("application/ld+json", {
        name: "javascript",
        jsonld: !0
    }),
    e.defineMIME("text/typescript", {
        name: "javascript",
        typescript: !0
    }),
    e.defineMIME("application/typescript", {
        name: "javascript",
        typescript: !0
    })
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("htmlmixed",
    function(t, r) {
        function n(e, t) {
            var r = t.htmlState.tagName;
            r && (r = r.toLowerCase());
            var n = s.token(e, t.htmlState);
            if ("script" == r && /\btag\b/.test(n) && ">" == e.current()) {
                var i = e.string.slice(Math.max(0, e.pos - 100), e.pos).match(/\btype\s*=\s*("[^"]+"|'[^']+'|\S+)[^<]*$/i);
                i = i ? i[1] : "",
                i && /[\"\']/.test(i.charAt(0)) && (i = i.slice(1, i.length - 1));
                for (var u = 0; u < c.length; ++u) {
                    var d = c[u];
                    if ("string" == typeof d.matches ? i == d.matches: d.matches.test(i)) {
                        d.mode && (t.token = o, t.localMode = d.mode, t.localState = d.mode.startState && d.mode.startState(s.indent(t.htmlState, "")));
                        break
                    }
                }
            } else "style" == r && /\btag\b/.test(n) && ">" == e.current() && (t.token = a, t.localMode = l, t.localState = l.startState(s.indent(t.htmlState, "")));
            return n
        }
        function i(e, t, r) {
            var n, i = e.current(),
            o = i.search(t);
            return o > -1 ? e.backUp(i.length - o) : (n = i.match(/<\/?$/)) && (e.backUp(i.length), e.match(t, !1) || e.match(i)),
            r
        }
        function o(e, t) {
            return e.match(/^<\/\s*script\s*>/i, !1) ? (t.token = n, t.localState = t.localMode = null, null) : i(e, /<\/\s*script\s*>/, t.localMode.token(e, t.localState))
        }
        function a(e, t) {
            return e.match(/^<\/\s*style\s*>/i, !1) ? (t.token = n, t.localState = t.localMode = null, null) : i(e, /<\/\s*style\s*>/, l.token(e, t.localState))
        }
        var s = e.getMode(t, {
            name: "xml",
            htmlMode: !0,
            multilineTagIndentFactor: r.multilineTagIndentFactor,
            multilineTagIndentPastTag: r.multilineTagIndentPastTag
        }),
        l = e.getMode(t, "css"),
        c = [],
        u = r && r.scriptTypes;
        if (c.push({
            matches: /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^$/i,
            mode: e.getMode(t, "javascript")
        }), u) for (var d = 0; d < u.length; ++d) {
            var f = u[d];
            c.push({
                matches: f.matches,
                mode: f.mode && e.getMode(t, f.mode)
            })
        }
        return c.push({
            matches: /./,
            mode: e.getMode(t, "text/plain")
        }),
        {
            startState: function() {
                var e = s.startState();
                return {
                    token: n,
                    localMode: null,
                    localState: null,
                    htmlState: e
                }
            },
            copyState: function(t) {
                if (t.localState) var r = e.copyState(t.localMode, t.localState);
                return {
                    token: t.token,
                    localMode: t.localMode,
                    localState: r,
                    htmlState: e.copyState(s, t.htmlState)
                }
            },
            token: function(e, t) {
                return t.token(e, t)
            },
            indent: function(t, r) {
                return ! t.localMode || /^\s*<\//.test(r) ? s.indent(t.htmlState, r) : t.localMode.indent ? t.localMode.indent(t.localState, r) : e.Pass
            },
            innerMode: function(e) {
                return {
                    state: e.localState || e.htmlState,
                    mode: e.localMode || s
                }
            }
        }
    },
    "xml", "javascript", "css"),
    e.defineMIME("text/html", "htmlmixed")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../markdown/markdown"), require("../../addon/mode/overlay")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("gfm",
    function(t, r) {
        function n(e) {
            return e.code = !1,
            null
        }
        var i = 0,
        o = {
            startState: function() {
                return {
                    code: !1,
                    codeBlock: !1,
                    ateSpace: !1
                }
            },
            copyState: function(e) {
                return {
                    code: e.code,
                    codeBlock: e.codeBlock,
                    ateSpace: e.ateSpace
                }
            },
            token: function(e, t) {
                if (t.combineTokens = null, t.codeBlock) return e.match(/^```/) ? (t.codeBlock = !1, null) : (e.skipToEnd(), null);
                if (e.sol() && (t.code = !1), e.sol() && e.match(/^```/)) return e.skipToEnd(),
                t.codeBlock = !0,
                null;
                if ("`" === e.peek()) {
                    e.next();
                    var r = e.pos;
                    e.eatWhile("`");
                    var n = 1 + e.pos - r;
                    return t.code ? n === i && (t.code = !1) : (i = n, t.code = !0),
                    null
                }
                if (t.code) return e.next(),
                null;
                if (e.eatSpace()) return t.ateSpace = !0,
                null;
                if (e.sol() || t.ateSpace) {
                    if (t.ateSpace = !1, e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/)) return t.combineTokens = !0,
                    "link";
                    if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) return t.combineTokens = !0,
                    "link"
                }
                return e.match(/^((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?????????????????]))/i) && "](" != e.string.slice(e.start - 2, e.start) ? (t.combineTokens = !0, "link") : (e.next(), null)
            },
            blankLine: n
        },
        a = {
            underscoresBreakWords: !1,
            taskLists: !0,
            fencedCodeBlocks: !0,
            strikethrough: !0
        };
        for (var s in r) a[s] = r[s];
        return a.name = "markdown",
        e.defineMIME("gfmBase", a),
        e.overlayMode(e.getMode(t, "gfmBase"), o)
    },
    "markdown")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("http",
    function() {
        function e(e, t) {
            return e.skipToEnd(),
            t.cur = a,
            "error"
        }
        function t(t, n) {
            return t.match(/^HTTP\/\d\.\d/) ? (n.cur = r, "keyword") : t.match(/^[A-Z]+/) && /[ \t]/.test(t.peek()) ? (n.cur = i, "keyword") : e(t, n)
        }
        function r(t, r) {
            var i = t.match(/^\d+/);
            if (!i) return e(t, r);
            r.cur = n;
            var o = Number(i[0]);
            return o >= 100 && 200 > o ? "positive informational": o >= 200 && 300 > o ? "positive success": o >= 300 && 400 > o ? "positive redirect": o >= 400 && 500 > o ? "negative client-error": o >= 500 && 600 > o ? "negative server-error": "error"
        }
        function n(e, t) {
            return e.skipToEnd(),
            t.cur = a,
            null
        }
        function i(e, t) {
            return e.eatWhile(/\S/),
            t.cur = o,
            "string-2"
        }
        function o(t, r) {
            return t.match(/^HTTP\/\d\.\d$/) ? (r.cur = a, "keyword") : e(t, r)
        }
        function a(e) {
            return e.sol() && !e.eat(/[ \t]/) ? e.match(/^.*?:/) ? "atom": (e.skipToEnd(), "error") : (e.skipToEnd(), "string")
        }
        function s(e) {
            return e.skipToEnd(),
            null
        }
        return {
            token: function(e, t) {
                var r = t.cur;
                return r != a && r != s && e.eatSpace() ? null: r(e, t)
            },
            blankLine: function(e) {
                e.cur = s
            },
            startState: function() {
                return {
                    cur: t
                }
            }
        }
    }),
    e.defineMIME("message/http", "http")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("go",
    function(e) {
        function t(e, t) {
            var i = e.next();
            if ('"' == i || "'" == i || "`" == i) return t.tokenize = r(i),
            t.tokenize(e, t);
            if (/[\d\.]/.test(i)) return "." == i ? e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/) : "0" == i ? e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/) : e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),
            "number";
            if (/[\[\]{}\(\),;\:\.]/.test(i)) return s = i,
            null;
            if ("/" == i) {
                if (e.eat("*")) return t.tokenize = n,
                n(e, t);
                if (e.eat("/")) return e.skipToEnd(),
                "comment"
            }
            if (d.test(i)) return e.eatWhile(d),
            "operator";
            e.eatWhile(/[\w\$_\xa1-\uffff]/);
            var o = e.current();
            return c.propertyIsEnumerable(o) ? (("case" == o || "default" == o) && (s = "case"), "keyword") : u.propertyIsEnumerable(o) ? "atom": "variable"
        }
        function r(e) {
            return function(r, n) {
                for (var i, o = !1,
                a = !1; null != (i = r.next());) {
                    if (i == e && !o) {
                        a = !0;
                        break
                    }
                    o = !o && "\\" == i
                }
                return (a || !o && "`" != e) && (n.tokenize = t),
                "string"
            }
        }
        function n(e, r) {
            for (var n, i = !1; n = e.next();) {
                if ("/" == n && i) {
                    r.tokenize = t;
                    break
                }
                i = "*" == n
            }
            return "comment"
        }
        function i(e, t, r, n, i) {
            this.indented = e,
            this.column = t,
            this.type = r,
            this.align = n,
            this.prev = i
        }
        function o(e, t, r) {
            return e.context = new i(e.indented, t, r, null, e.context)
        }
        function a(e) {
            if (e.context.prev) {
                var t = e.context.type;
                return (")" == t || "]" == t || "}" == t) && (e.indented = e.context.indented),
                e.context = e.context.prev
            }
        }
        var s, l = e.indentUnit,
        c = {
            "break": !0,
            "case": !0,
            chan: !0,
            "const": !0,
            "continue": !0,
            "default": !0,
            defer: !0,
            "else": !0,
            fallthrough: !0,
            "for": !0,
            func: !0,
            go: !0,
            "goto": !0,
            "if": !0,
            "import": !0,
            "interface": !0,
            map: !0,
            "package": !0,
            range: !0,
            "return": !0,
            select: !0,
            struct: !0,
            "switch": !0,
            type: !0,
            "var": !0,
            bool: !0,
            "byte": !0,
            complex64: !0,
            complex128: !0,
            float32: !0,
            float64: !0,
            int8: !0,
            int16: !0,
            int32: !0,
            int64: !0,
            string: !0,
            uint8: !0,
            uint16: !0,
            uint32: !0,
            uint64: !0,
            "int": !0,
            uint: !0,
            uintptr: !0
        },
        u = {
            "true": !0,
            "false": !0,
            iota: !0,
            nil: !0,
            append: !0,
            cap: !0,
            close: !0,
            complex: !0,
            copy: !0,
            imag: !0,
            len: !0,
            make: !0,
            "new": !0,
            panic: !0,
            print: !0,
            println: !0,
            real: !0,
            recover: !0
        },
        d = /[+\-*&^%:=<>!|\/]/;
        return {
            startState: function(e) {
                return {
                    tokenize: null,
                    context: new i((e || 0) - l, 0, "top", !1),
                    indented: 0,
                    startOfLine: !0
                }
            },
            token: function(e, r) {
                var n = r.context;
                if (e.sol() && (null == n.align && (n.align = !1), r.indented = e.indentation(), r.startOfLine = !0, "case" == n.type && (n.type = "}")), e.eatSpace()) return null;
                s = null;
                var i = (r.tokenize || t)(e, r);
                return "comment" == i ? i: (null == n.align && (n.align = !0), "{" == s ? o(r, e.column(), "}") : "[" == s ? o(r, e.column(), "]") : "(" == s ? o(r, e.column(), ")") : "case" == s ? n.type = "case": "}" == s && "}" == n.type ? n = a(r) : s == n.type && a(r), r.startOfLine = !1, i)
            },
            indent: function(e, r) {
                if (e.tokenize != t && null != e.tokenize) return 0;
                var n = e.context,
                i = r && r.charAt(0);
                if ("case" == n.type && /^(?:case|default)\b/.test(r)) return e.context.type = "}",
                n.indented;
                var o = i == n.type;
                return n.align ? n.column + (o ? 0 : 1) : n.indented + (o ? 0 : l)
            },
            electricChars: "{}):",
            fold: "brace",
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            lineComment: "//"
        }
    }),
    e.defineMIME("text/x-go", "go")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../clike/clike")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../clike/clike"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    function t(e) {
        for (var t = {},
        r = 0; r < e.length; ++r) t[e[r]] = !0;
        return t
    }
    var r = "this super static final const abstract class extends external factory implements get native operator set typedef with enum throw rethrow assert break case continue default in return new deferred async await try catch finally do else for if switch while import library export part of show hide is".split(" "),
    n = "try catch finally do else for if switch while".split(" "),
    i = "true false null".split(" "),
    o = "void bool num int double dynamic var String".split(" ");
    e.defineMIME("application/dart", {
        name: "clike",
        keywords: t(r),
        multiLineStrings: !0,
        blockKeywords: t(n),
        builtin: t(o),
        atoms: t(i),
        hooks: {
            "@": function(e) {
                return e.eatWhile(/[\w\$_]/),
                "meta"
            }
        }
    }),
    e.registerHelper("hintWords", "application/dart", r.concat(i).concat(o)),
    e.defineMode("dart",
    function(t) {
        return e.getMode(t, "application/dart")
    },
    "clike")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("coffeescript",
    function(e, t) {
        function r(e) {
            return new RegExp("^((" + e.join(")|(") + "))\\b")
        }
        function n(e, t) {
            if (e.sol()) {
                null === t.scope.align && (t.scope.align = !1);
                var r = t.scope.offset;
                if (e.eatSpace()) {
                    var n = e.indentation();
                    return n > r && "coffee" == t.scope.type ? "indent": r > n ? "dedent": null
                }
                r > 0 && s(e, t)
            }
            if (e.eatSpace()) return null;
            var a = e.peek();
            if (e.match("####")) return e.skipToEnd(),
            "comment";
            if (e.match("###")) return t.tokenize = o,
            t.tokenize(e, t);
            if ("#" === a) return e.skipToEnd(),
            "comment";
            if (e.match(/^-?[0-9\.]/, !1)) {
                var l = !1;
                if (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (l = !0), e.match(/^-?\d+\.\d*/) && (l = !0), e.match(/^-?\.\d+/) && (l = !0), l) return "." == e.peek() && e.backUp(1),
                "number";
                var p = !1;
                if (e.match(/^-?0x[0-9a-f]+/i) && (p = !0), e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (p = !0), e.match(/^-?0(?![\dx])/i) && (p = !0), p) return "number"
            }
            if (e.match(b)) return t.tokenize = i(e.current(), !1, "string"),
            t.tokenize(e, t);
            if (e.match(y)) {
                if ("/" != e.current() || e.match(/^.*\//, !1)) return t.tokenize = i(e.current(), !0, "string-2"),
                t.tokenize(e, t);
                e.backUp(1)
            }
            return e.match(u) || e.match(h) ? "operator": e.match(d) ? "punctuation": e.match(k) ? "atom": e.match(v) ? "keyword": e.match(f) ? "variable": e.match(m) ? "property": (e.next(), c)
        }
        function i(e, r, i) {
            return function(o, a) {
                for (; ! o.eol();) if (o.eatWhile(/[^'"\/\\]/), o.eat("\\")) {
                    if (o.next(), r && o.eol()) return i
                } else {
                    if (o.match(e)) return a.tokenize = n,
                    i;
                    o.eat(/['"\/]/)
                }
                return r && (t.singleLineStringErrors ? i = c: a.tokenize = n),
                i
            }
        }
        function o(e, t) {
            for (; ! e.eol();) {
                if (e.eatWhile(/[^#]/), e.match("###")) {
                    t.tokenize = n;
                    break
                }
                e.eatWhile("#")
            }
            return "comment"
        }
        function a(t, r, n) {
            n = n || "coffee";
            for (var i = 0,
            o = !1,
            a = null,
            s = r.scope; s; s = s.prev) if ("coffee" === s.type || "}" == s.type) {
                i = s.offset + e.indentUnit;
                break
            }
            "coffee" !== n ? (o = null, a = t.column() + t.current().length) : r.scope.align && (r.scope.align = !1),
            r.scope = {
                offset: i,
                type: n,
                prev: r.scope,
                align: o,
                alignOffset: a
            }
        }
        function s(e, t) {
            if (t.scope.prev) {
                if ("coffee" === t.scope.type) {
                    for (var r = e.indentation(), n = !1, i = t.scope; i; i = i.prev) if (r === i.offset) {
                        n = !0;
                        break
                    }
                    if (!n) return ! 0;
                    for (; t.scope.prev && t.scope.offset !== r;) t.scope = t.scope.prev;
                    return ! 1
                }
                return t.scope = t.scope.prev,
                !1
            }
        }
        function l(e, t) {
            var r = t.tokenize(e, t),
            n = e.current();
            if ("." === n) return r = t.tokenize(e, t),
            n = e.current(),
            /^\.[\w$]+$/.test(n) ? "variable": c;
            "return" === n && (t.dedent = !0),
            ("->" !== n && "=>" !== n || t.lambda || e.peek()) && "indent" !== r || a(e, t);
            var i = "[({".indexOf(n);
            if ( - 1 !== i && a(e, t, "])}".slice(i, i + 1)), p.exec(n) && a(e, t), "then" == n && s(e, t), "dedent" === r && s(e, t)) return c;
            if (i = "])}".indexOf(n), -1 !== i) {
                for (;
                "coffee" == t.scope.type && t.scope.prev;) t.scope = t.scope.prev;
                t.scope.type == n && (t.scope = t.scope.prev)
            }
            return t.dedent && e.eol() && ("coffee" == t.scope.type && t.scope.prev && (t.scope = t.scope.prev), t.dedent = !1),
            r
        }
        var c = "error",
        u = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,
        d = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/,
        f = /^[_A-Za-z$][_A-Za-z$0-9]*/,
        m = /^(@|this\.)[_A-Za-z$][_A-Za-z$0-9]*/,
        h = r(["and", "or", "not", "is", "isnt", "in", "instanceof", "typeof"]),
        p = ["for", "while", "loop", "if", "unless", "else", "switch", "try", "catch", "finally", "class"],
        g = ["break", "by", "continue", "debugger", "delete", "do", "in", "of", "new", "return", "then", "this", "@", "throw", "when", "until", "extends"],
        v = r(p.concat(g));
        p = r(p);
        var b = /^('{3}|\"{3}|['\"])/,
        y = /^(\/{3}|\/)/,
        x = ["Infinity", "NaN", "undefined", "null", "true", "false", "on", "off", "yes", "no"],
        k = r(x),
        w = {
            startState: function(e) {
                return {
                    tokenize: n,
                    scope: {
                        offset: e || 0,
                        type: "coffee",
                        prev: null,
                        align: !1
                    },
                    lastToken: null,
                    lambda: !1,
                    dedent: 0
                }
            },
            token: function(e, t) {
                var r = null === t.scope.align && t.scope;
                r && e.sol() && (r.align = !1);
                var n = l(e, t);
                return r && n && "comment" != n && (r.align = !0),
                t.lastToken = {
                    style: n,
                    content: e.current()
                },
                e.eol() && e.lambda && (t.lambda = !1),
                n
            },
            indent: function(e, t) {
                if (e.tokenize != n) return 0;
                var r = e.scope,
                i = t && "])}".indexOf(t.charAt(0)) > -1;
                if (i) for (;
                "coffee" == r.type && r.prev;) r = r.prev;
                var o = i && r.type === t.charAt(0);
                return r.align ? r.alignOffset - (o ? 1 : 0) : (o ? r.prev: r).offset
            },
            lineComment: "#",
            fold: "indent"
        };
        return w
    }),
    e.defineMIME("text/x-coffeescript", "coffeescript")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("nginx",
    function(e) {
        function t(e) {
            for (var t = {},
            r = e.split(" "), n = 0; n < r.length; ++n) t[r[n]] = !0;
            return t
        }
        function r(e, t) {
            return s = t,
            e
        }
        function n(e, t) {
            e.eatWhile(/[\w\$_]/);
            var n = e.current();
            if (l.propertyIsEnumerable(n)) return "keyword";
            if (c.propertyIsEnumerable(n)) return "variable-2";
            if (u.propertyIsEnumerable(n)) return "string-2";
            var s = e.next();
            return "@" == s ? (e.eatWhile(/[\w\\\-]/), r("meta", e.current())) : "/" == s && e.eat("*") ? (t.tokenize = i, i(e, t)) : "<" == s && e.eat("!") ? (t.tokenize = o, o(e, t)) : "=" != s ? "~" != s && "|" != s || !e.eat("=") ? '"' == s || "'" == s ? (t.tokenize = a(s), t.tokenize(e, t)) : "#" == s ? (e.skipToEnd(), r("comment", "comment")) : "!" == s ? (e.match(/^\s*\w*/), r("keyword", "important")) : /\d/.test(s) ? (e.eatWhile(/[\w.%]/), r("number", "unit")) : /[,.+>*\/]/.test(s) ? r(null, "select-op") : /[;{}:\[\]]/.test(s) ? r(null, s) : (e.eatWhile(/[\w\\\-]/), r("variable", "variable")) : r(null, "compare") : void r(null, "compare")
        }
        function i(e, t) {
            for (var i, o = !1; null != (i = e.next());) {
                if (o && "/" == i) {
                    t.tokenize = n;
                    break
                }
                o = "*" == i
            }
            return r("comment", "comment")
        }
        function o(e, t) {
            for (var i, o = 0; null != (i = e.next());) {
                if (o >= 2 && ">" == i) {
                    t.tokenize = n;
                    break
                }
                o = "-" == i ? o + 1 : 0
            }
            return r("comment", "comment")
        }
        function a(e) {
            return function(t, i) {
                for (var o, a = !1; null != (o = t.next()) && (o != e || a);) a = !a && "\\" == o;
                return a || (i.tokenize = n),
                r("string", "string")
            }
        }
        var s, l = t("break return rewrite set accept_mutex accept_mutex_delay access_log add_after_body add_before_body add_header addition_types aio alias allow ancient_browser ancient_browser_value auth_basic auth_basic_user_file auth_http auth_http_header auth_http_timeout autoindex autoindex_exact_size autoindex_localtime charset charset_types client_body_buffer_size client_body_in_file_only client_body_in_single_buffer client_body_temp_path client_body_timeout client_header_buffer_size client_header_timeout client_max_body_size connection_pool_size create_full_put_path daemon dav_access dav_methods debug_connection debug_points default_type degradation degrade deny devpoll_changes devpoll_events directio directio_alignment empty_gif env epoll_events error_log eventport_events expires fastcgi_bind fastcgi_buffer_size fastcgi_buffers fastcgi_busy_buffers_size fastcgi_cache fastcgi_cache_key fastcgi_cache_methods fastcgi_cache_min_uses fastcgi_cache_path fastcgi_cache_use_stale fastcgi_cache_valid fastcgi_catch_stderr fastcgi_connect_timeout fastcgi_hide_header fastcgi_ignore_client_abort fastcgi_ignore_headers fastcgi_index fastcgi_intercept_errors fastcgi_max_temp_file_size fastcgi_next_upstream fastcgi_param fastcgi_pass_header fastcgi_pass_request_body fastcgi_pass_request_headers fastcgi_read_timeout fastcgi_send_lowat fastcgi_send_timeout fastcgi_split_path_info fastcgi_store fastcgi_store_access fastcgi_temp_file_write_size fastcgi_temp_path fastcgi_upstream_fail_timeout fastcgi_upstream_max_fails flv geoip_city geoip_country google_perftools_profiles gzip gzip_buffers gzip_comp_level gzip_disable gzip_hash gzip_http_version gzip_min_length gzip_no_buffer gzip_proxied gzip_static gzip_types gzip_vary gzip_window if_modified_since ignore_invalid_headers image_filter image_filter_buffer image_filter_jpeg_quality image_filter_transparency imap_auth imap_capabilities imap_client_buffer index ip_hash keepalive_requests keepalive_timeout kqueue_changes kqueue_events large_client_header_buffers limit_conn limit_conn_log_level limit_rate limit_rate_after limit_req limit_req_log_level limit_req_zone limit_zone lingering_time lingering_timeout lock_file log_format log_not_found log_subrequest map_hash_bucket_size map_hash_max_size master_process memcached_bind memcached_buffer_size memcached_connect_timeout memcached_next_upstream memcached_read_timeout memcached_send_timeout memcached_upstream_fail_timeout memcached_upstream_max_fails merge_slashes min_delete_depth modern_browser modern_browser_value msie_padding msie_refresh multi_accept open_file_cache open_file_cache_errors open_file_cache_events open_file_cache_min_uses open_file_cache_valid open_log_file_cache output_buffers override_charset perl perl_modules perl_require perl_set pid pop3_auth pop3_capabilities port_in_redirect postpone_gzipping postpone_output protocol proxy proxy_bind proxy_buffer proxy_buffer_size proxy_buffering proxy_buffers proxy_busy_buffers_size proxy_cache proxy_cache_key proxy_cache_methods proxy_cache_min_uses proxy_cache_path proxy_cache_use_stale proxy_cache_valid proxy_connect_timeout proxy_headers_hash_bucket_size proxy_headers_hash_max_size proxy_hide_header proxy_ignore_client_abort proxy_ignore_headers proxy_intercept_errors proxy_max_temp_file_size proxy_method proxy_next_upstream proxy_pass_error_message proxy_pass_header proxy_pass_request_body proxy_pass_request_headers proxy_read_timeout proxy_redirect proxy_send_lowat proxy_send_timeout proxy_set_body proxy_set_header proxy_ssl_session_reuse proxy_store proxy_store_access proxy_temp_file_write_size proxy_temp_path proxy_timeout proxy_upstream_fail_timeout proxy_upstream_max_fails random_index read_ahead real_ip_header recursive_error_pages request_pool_size reset_timedout_connection resolver resolver_timeout rewrite_log rtsig_overflow_events rtsig_overflow_test rtsig_overflow_threshold rtsig_signo satisfy secure_link_secret send_lowat send_timeout sendfile sendfile_max_chunk server_name_in_redirect server_names_hash_bucket_size server_names_hash_max_size server_tokens set_real_ip_from smtp_auth smtp_capabilities smtp_client_buffer smtp_greeting_delay so_keepalive source_charset ssi ssi_ignore_recycled_buffers ssi_min_file_chunk ssi_silent_errors ssi_types ssi_value_length ssl ssl_certificate ssl_certificate_key ssl_ciphers ssl_client_certificate ssl_crl ssl_dhparam ssl_engine ssl_prefer_server_ciphers ssl_protocols ssl_session_cache ssl_session_timeout ssl_verify_client ssl_verify_depth starttls stub_status sub_filter sub_filter_once sub_filter_types tcp_nodelay tcp_nopush thread_stack_size timeout timer_resolution types_hash_bucket_size types_hash_max_size underscores_in_headers uninitialized_variable_warn use user userid userid_domain userid_expires userid_mark userid_name userid_p3p userid_path userid_service valid_referers variables_hash_bucket_size variables_hash_max_size worker_connections worker_cpu_affinity worker_priority worker_processes worker_rlimit_core worker_rlimit_nofile worker_rlimit_sigpending worker_threads working_directory xclient xml_entities xslt_stylesheet xslt_typesdrew@li229-23"),
        c = t("http mail events server types location upstream charset_map limit_except if geo map"),
        u = t("include root server server_name listen internal proxy_pass memcached_pass fastcgi_pass try_files"),
        d = e.indentUnit;

        return {
            startState: function(e) {
                return {
                    tokenize: n,
                    baseIndent: e || 0,
                    stack: []
                }
            },
            token: function(e, t) {
                if (e.eatSpace()) return null;
                s = null;
                var r = t.tokenize(e, t),
                n = t.stack[t.stack.length - 1];
                return "hash" == s && "rule" == n ? r = "atom": "variable" == r && ("rule" == n ? r = "number": n && "@media{" != n || (r = "tag")),
                "rule" == n && /^[\{\};]$/.test(s) && t.stack.pop(),
                "{" == s ? "@media" == n ? t.stack[t.stack.length - 1] = "@media{": t.stack.push("{") : "}" == s ? t.stack.pop() : "@media" == s ? t.stack.push("@media") : "{" == n && "comment" != s && t.stack.push("rule"),
                r
            },
            indent: function(e, t) {
                var r = e.stack.length;
                return /^\}/.test(t) && (r -= "rule" == e.stack[e.stack.length - 1] ? 2 : 1),
                e.baseIndent + r * d
            },
            electricChars: "}"
        }
    }),
    e.defineMIME("text/nginx", "text/x-nginx-conf")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    function t(e) {
        return new RegExp("^((" + e.join(")|(") + "))\\b")
    }
    function r(e) {
        return e.scopes[e.scopes.length - 1]
    }
    var n = t(["and", "or", "not", "is"]),
    i = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in"],
    o = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"],
    a = {
        builtins: ["apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None"],
        keywords: ["exec", "print"]
    },
    s = {
        builtins: ["ascii", "bytes", "exec", "print"],
        keywords: ["nonlocal", "False", "True", "None"]
    };
    e.registerHelper("hintWords", "python", i.concat(o)),
    e.defineMode("python",
    function(l, c) {
        function u(e, t) {
            if (e.sol() && "py" == r(t).type) {
                var n = r(t).offset;
                if (e.eatSpace()) {
                    var i = e.indentation();
                    return i > n ? m(e, t, "py") : n > i && h(e, t) && (t.errorToken = !0),
                    null
                }
                var o = d(e, t);
                return n > 0 && h(e, t) && (o += " " + g),
                o
            }
            return d(e, t)
        }
        function d(e, t) {
            if (e.eatSpace()) return null;
            var r = e.peek();
            if ("#" == r) return e.skipToEnd(),
            "comment";
            if (e.match(/^[0-9\.]/, !1)) {
                var i = !1;
                if (e.match(/^\d*\.\d+(e[\+\-]?\d+)?/i) && (i = !0), e.match(/^\d+\.\d*/) && (i = !0), e.match(/^\.\d+/) && (i = !0), i) return e.eat(/J/i),
                "number";
                var o = !1;
                if (e.match(/^0x[0-9a-f]+/i) && (o = !0), e.match(/^0b[01]+/i) && (o = !0), e.match(/^0o[0-7]+/i) && (o = !0), e.match(/^[1-9]\d*(e[\+\-]?\d+)?/) && (e.eat(/J/i), o = !0), e.match(/^0(?![\dx])/i) && (o = !0), o) return e.eat(/L/i),
                "number"
            }
            return e.match(T) ? (t.tokenize = f(e.current()), t.tokenize(e, t)) : e.match(x) || e.match(y) ? null: e.match(b) || e.match(k) || e.match(n) ? "operator": e.match(v) ? null: e.match(M) ? "keyword": e.match(L) ? "builtin": e.match(/^(self|cls)\b/) ? "variable-2": e.match(w) ? "def" == t.lastToken || "class" == t.lastToken ? "def": "variable": (e.next(), g)
        }
        function f(e) {
            function t(t, i) {
                for (; ! t.eol();) if (t.eatWhile(/[^'"\\]/), t.eat("\\")) {
                    if (t.next(), r && t.eol()) return n
                } else {
                    if (t.match(e)) return i.tokenize = u,
                    n;
                    t.eat(/['"]/)
                }
                if (r) {
                    if (c.singleLineStringErrors) return g;
                    i.tokenize = u
                }
                return n
            }
            for (;
            "rub".indexOf(e.charAt(0).toLowerCase()) >= 0;) e = e.substr(1);
            var r = 1 == e.length,
            n = "string";
            return t.isString = !0,
            t
        }
        function m(e, t, n) {
            var i = 0,
            o = null;
            if ("py" == n) for (;
            "py" != r(t).type;) t.scopes.pop();
            i = r(t).offset + ("py" == n ? l.indentUnit: _),
            "py" == n || e.match(/^(\s|#.*)*$/, !1) || (o = e.column() + 1),
            t.scopes.push({
                offset: i,
                type: n,
                align: o
            })
        }
        function h(e, t) {
            for (var n = e.indentation(); r(t).offset > n;) {
                if ("py" != r(t).type) return ! 0;
                t.scopes.pop()
            }
            return r(t).offset != n
        }
        function p(e, t) {
            var n = t.tokenize(e, t),
            i = e.current();
            if ("." == i) return n = e.match(w, !1) ? null: g,
            null == n && "meta" == t.lastStyle && (n = "meta"),
            n;
            if ("@" == i) return c.version && 3 == parseInt(c.version, 10) ? e.match(w, !1) ? "meta": "operator": e.match(w, !1) ? "meta": g;
            "variable" != n && "builtin" != n || "meta" != t.lastStyle || (n = "meta"),
            ("pass" == i || "return" == i) && (t.dedent += 1),
            "lambda" == i && (t.lambda = !0),
            ":" != i || t.lambda || "py" != r(t).type || m(e, t, "py");
            var o = 1 == i.length ? "[({".indexOf(i) : -1;
            if ( - 1 != o && m(e, t, "])}".slice(o, o + 1)), o = "])}".indexOf(i), -1 != o) {
                if (r(t).type != i) return g;
                t.scopes.pop()
            }
            return t.dedent > 0 && e.eol() && "py" == r(t).type && (t.scopes.length > 1 && t.scopes.pop(), t.dedent -= 1),
            n
        }
        var g = "error",
        v = c.singleDelimiters || new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),
        b = c.doubleOperators || new RegExp("^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),
        y = c.doubleDelimiters || new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),
        x = c.tripleDelimiters || new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");
        if (c.version && 3 == parseInt(c.version, 10)) var k = c.singleOperators || new RegExp("^[\\+\\-\\*/%&|\\^~<>!@]"),
        w = c.identifiers || new RegExp("^[_A-Za-z??-???][_A-Za-z0-9??-???]*");
        else var k = c.singleOperators || new RegExp("^[\\+\\-\\*/%&|\\^~<>!]"),
        w = c.identifiers || new RegExp("^[_A-Za-z][_A-Za-z0-9]*");
        var _ = c.hangingIndent || l.indentUnit,
        C = i,
        S = o;
        if (void 0 != c.extra_keywords && (C = C.concat(c.extra_keywords)), void 0 != c.extra_builtins && (S = S.concat(c.extra_builtins)), c.version && 3 == parseInt(c.version, 10)) {
            C = C.concat(s.keywords),
            S = S.concat(s.builtins);
            var T = new RegExp("^(([rb]|(br))?('{3}|\"{3}|['\"]))", "i")
        } else {
            C = C.concat(a.keywords),
            S = S.concat(a.builtins);
            var T = new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i")
        }
        var M = t(C),
        L = t(S),
        E = {
            startState: function(e) {
                return {
                    tokenize: u,
                    scopes: [{
                        offset: e || 0,
                        type: "py",
                        align: null
                    }],
                    lastStyle: null,
                    lastToken: null,
                    lambda: !1,
                    dedent: 0
                }
            },
            token: function(e, t) {
                var r = t.errorToken;
                r && (t.errorToken = !1);
                var n = p(e, t);
                t.lastStyle = n;
                var i = e.current();
                return i && n && (t.lastToken = i),
                e.eol() && t.lambda && (t.lambda = !1),
                r ? n + " " + g: n
            },
            indent: function(t, n) {
                if (t.tokenize != u) return t.tokenize.isString ? e.Pass: 0;
                var i = r(t),
                o = n && n.charAt(0) == i.type;
                return null != i.align ? i.align - (o ? 1 : 0) : o && t.scopes.length > 1 ? t.scopes[t.scopes.length - 2].offset: i.offset
            },
            lineComment: "#",
            fold: "indent"
        };
        return E
    }),
    e.defineMIME("text/x-python", "python");
    var l = function(e) {
        return e.split(" ")
    };
    e.defineMIME("text/x-cython", {
        name: "python",
        extra_keywords: l("by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE")
    })
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    function t(e, t) {
        return e.string.charAt(e.pos + (t || 0))
    }
    function r(e, t) {
        if (t) {
            var r = e.pos - t;
            return e.string.substr(r >= 0 ? r: 0, t)
        }
        return e.string.substr(0, e.pos - 1)
    }
    function n(e, t) {
        var r = e.string.length,
        n = r - e.pos + 1;
        return e.string.substr(e.pos, t && r > t ? t: n)
    }
    function i(e, t) {
        var r, n = e.pos + t;
        0 >= n ? e.pos = 0 : n >= (r = e.string.length - 1) ? e.pos = r: e.pos = n
    }
    e.defineMode("perl",
    function() {
        function e(e, t, r, n, i) {
            return t.chain = null,
            t.style = null,
            t.tail = null,
            t.tokenize = function(e, t) {
                for (var o, s = !1,
                l = 0; o = e.next();) {
                    if (o === r[l] && !s) return void 0 !== r[++l] ? (t.chain = r[l], t.style = n, t.tail = i) : i && e.eatWhile(i),
                    t.tokenize = a,
                    n;
                    s = !s && "\\" == o
                }
                return n
            },
            t.tokenize(e, t)
        }
        function o(e, t, r) {
            return t.tokenize = function(e, t) {
                return e.string == r && (t.tokenize = a),
                e.skipToEnd(),
                "string"
            },
            t.tokenize(e, t)
        }
        function a(a, u) {
            if (a.eatSpace()) return null;
            if (u.chain) return e(a, u, u.chain, u.style, u.tail);
            if (a.match(/^\-?[\d\.]/, !1) && a.match(/^(\-?(\d*\.\d+(e[+-]?\d+)?|\d+\.\d*)|0x[\da-fA-F]+|0b[01]+|\d+(e[+-]?\d+)?)/)) return "number";
            if (a.match(/^<<(?=\w)/)) return a.eatWhile(/\w/),
            o(a, u, a.current().substr(2));
            if (a.sol() && a.match(/^\=item(?!\w)/)) return o(a, u, "=cut");
            var d = a.next();
            if ('"' == d || "'" == d) {
                if (r(a, 3) == "<<" + d) {
                    var f = a.pos;
                    a.eatWhile(/\w/);
                    var m = a.current().substr(1);
                    if (m && a.eat(d)) return o(a, u, m);
                    a.pos = f
                }
                return e(a, u, [d], "string")
            }
            if ("q" == d) {
                var h = t(a, -2);
                if (!h || !/\w/.test(h)) if (h = t(a, 0), "x" == h) {
                    if (h = t(a, 1), "(" == h) return i(a, 2),
                    e(a, u, [")"], l, c);
                    if ("[" == h) return i(a, 2),
                    e(a, u, ["]"], l, c);
                    if ("{" == h) return i(a, 2),
                    e(a, u, ["}"], l, c);
                    if ("<" == h) return i(a, 2),
                    e(a, u, [">"], l, c);
                    if (/[\^'"!~\/]/.test(h)) return i(a, 1),
                    e(a, u, [a.eat(h)], l, c)
                } else if ("q" == h) {
                    if (h = t(a, 1), "(" == h) return i(a, 2),
                    e(a, u, [")"], "string");
                    if ("[" == h) return i(a, 2),
                    e(a, u, ["]"], "string");
                    if ("{" == h) return i(a, 2),
                    e(a, u, ["}"], "string");
                    if ("<" == h) return i(a, 2),
                    e(a, u, [">"], "string");
                    if (/[\^'"!~\/]/.test(h)) return i(a, 1),
                    e(a, u, [a.eat(h)], "string")
                } else if ("w" == h) {
                    if (h = t(a, 1), "(" == h) return i(a, 2),
                    e(a, u, [")"], "bracket");
                    if ("[" == h) return i(a, 2),
                    e(a, u, ["]"], "bracket");
                    if ("{" == h) return i(a, 2),
                    e(a, u, ["}"], "bracket");
                    if ("<" == h) return i(a, 2),
                    e(a, u, [">"], "bracket");
                    if (/[\^'"!~\/]/.test(h)) return i(a, 1),
                    e(a, u, [a.eat(h)], "bracket")
                } else if ("r" == h) {
                    if (h = t(a, 1), "(" == h) return i(a, 2),
                    e(a, u, [")"], l, c);
                    if ("[" == h) return i(a, 2),
                    e(a, u, ["]"], l, c);
                    if ("{" == h) return i(a, 2),
                    e(a, u, ["}"], l, c);
                    if ("<" == h) return i(a, 2),
                    e(a, u, [">"], l, c);
                    if (/[\^'"!~\/]/.test(h)) return i(a, 1),
                    e(a, u, [a.eat(h)], l, c)
                } else if (/[\^'"!~\/(\[{<]/.test(h)) {
                    if ("(" == h) return i(a, 1),
                    e(a, u, [")"], "string");
                    if ("[" == h) return i(a, 1),
                    e(a, u, ["]"], "string");
                    if ("{" == h) return i(a, 1),
                    e(a, u, ["}"], "string");
                    if ("<" == h) return i(a, 1),
                    e(a, u, [">"], "string");
                    if (/[\^'"!~\/]/.test(h)) return e(a, u, [a.eat(h)], "string")
                }
            }
            if ("m" == d) {
                var h = t(a, -2);
                if ((!h || !/\w/.test(h)) && (h = a.eat(/[(\[{<\^'"!~\/]/))) {
                    if (/[\^'"!~\/]/.test(h)) return e(a, u, [h], l, c);
                    if ("(" == h) return e(a, u, [")"], l, c);
                    if ("[" == h) return e(a, u, ["]"], l, c);
                    if ("{" == h) return e(a, u, ["}"], l, c);
                    if ("<" == h) return e(a, u, [">"], l, c)
                }
            }
            if ("s" == d) {
                var h = /[\/>\]})\w]/.test(t(a, -2));
                if (!h && (h = a.eat(/[(\[{<\^'"!~\/]/))) return "[" == h ? e(a, u, ["]", "]"], l, c) : "{" == h ? e(a, u, ["}", "}"], l, c) : "<" == h ? e(a, u, [">", ">"], l, c) : "(" == h ? e(a, u, [")", ")"], l, c) : e(a, u, [h, h], l, c)
            }
            if ("y" == d) {
                var h = /[\/>\]})\w]/.test(t(a, -2));
                if (!h && (h = a.eat(/[(\[{<\^'"!~\/]/))) return "[" == h ? e(a, u, ["]", "]"], l, c) : "{" == h ? e(a, u, ["}", "}"], l, c) : "<" == h ? e(a, u, [">", ">"], l, c) : "(" == h ? e(a, u, [")", ")"], l, c) : e(a, u, [h, h], l, c)
            }
            if ("t" == d) {
                var h = /[\/>\]})\w]/.test(t(a, -2));
                if (!h && (h = a.eat("r"), h && (h = a.eat(/[(\[{<\^'"!~\/]/)))) return "[" == h ? e(a, u, ["]", "]"], l, c) : "{" == h ? e(a, u, ["}", "}"], l, c) : "<" == h ? e(a, u, [">", ">"], l, c) : "(" == h ? e(a, u, [")", ")"], l, c) : e(a, u, [h, h], l, c)
            }
            if ("`" == d) return e(a, u, [d], "variable-2");
            if ("/" == d) return /~\s*$/.test(r(a)) ? e(a, u, [d], l, c) : "operator";
            if ("$" == d) {
                var f = a.pos;
                if (a.eatWhile(/\d/) || a.eat("{") && a.eatWhile(/\d/) && a.eat("}")) return "variable-2";
                a.pos = f
            }
            if (/[$@%]/.test(d)) {
                var f = a.pos;
                if (a.eat("^") && a.eat(/[A-Z]/) || !/[@$%&]/.test(t(a, -2)) && a.eat(/[=|\\\-#?@;:&`~\^!\[\]*'"$+.,\/<>()]/)) {
                    var h = a.current();
                    if (s[h]) return "variable-2"
                }
                a.pos = f
            }
            if (/[$@%&]/.test(d) && (a.eatWhile(/[\w$\[\]]/) || a.eat("{") && a.eatWhile(/[\w$\[\]]/) && a.eat("}"))) {
                var h = a.current();
                return s[h] ? "variable-2": "variable"
            }
            if ("#" == d && "$" != t(a, -2)) return a.skipToEnd(),
            "comment";
            if (/[:+\-\^*$&%@=<>!?|\/~\.]/.test(d)) {
                var f = a.pos;
                if (a.eatWhile(/[:+\-\^*$&%@=<>!?|\/~\.]/), s[a.current()]) return "operator";
                a.pos = f
            }
            if ("_" == d && 1 == a.pos) {
                if ("_END__" == n(a, 6)) return e(a, u, ["\x00"], "comment");
                if ("_DATA__" == n(a, 7)) return e(a, u, ["\x00"], "variable-2");
                if ("_C__" == n(a, 7)) return e(a, u, ["\x00"], "string")
            }
            if (/\w/.test(d)) {
                var f = a.pos;
                if ("{" == t(a, -2) && ("}" == t(a, 0) || a.eatWhile(/\w/) && "}" == t(a, 0))) return "string";
                a.pos = f
            }
            if (/[A-Z]/.test(d)) {
                var p = t(a, -2),
                f = a.pos;
                if (a.eatWhile(/[A-Z_]/), !/[\da-z]/.test(t(a, 0))) {
                    var h = s[a.current()];
                    return h ? (h[1] && (h = h[0]), ":" != p ? 1 == h ? "keyword": 2 == h ? "def": 3 == h ? "atom": 4 == h ? "operator": 5 == h ? "variable-2": "meta": "meta") : "meta"
                }
                a.pos = f
            }
            if (/[a-zA-Z_]/.test(d)) {
                var p = t(a, -2);
                a.eatWhile(/\w/);
                var h = s[a.current()];
                return h ? (h[1] && (h = h[0]), ":" != p ? 1 == h ? "keyword": 2 == h ? "def": 3 == h ? "atom": 4 == h ? "operator": 5 == h ? "variable-2": "meta": "meta") : "meta"
            }
            return null
        }
        var s = {
            "->": 4,
            "++": 4,
            "--": 4,
            "**": 4,
            "=~": 4,
            "!~": 4,
            "*": 4,
            "/": 4,
            "%": 4,
            x: 4,
            "+": 4,
            "-": 4,
            ".": 4,
            "<<": 4,
            ">>": 4,
            "<": 4,
            ">": 4,
            "<=": 4,
            ">=": 4,
            lt: 4,
            gt: 4,
            le: 4,
            ge: 4,
            "==": 4,
            "!=": 4,
            "<=>": 4,
            eq: 4,
            ne: 4,
            cmp: 4,
            "~~": 4,
            "&": 4,
            "|": 4,
            "^": 4,
            "&&": 4,
            "||": 4,
            "//": 4,
            "..": 4,
            "...": 4,
            "?": 4,
            ":": 4,
            "=": 4,
            "+=": 4,
            "-=": 4,
            "*=": 4,
            ",": 4,
            "=>": 4,
            "::": 4,
            not: 4,
            and: 4,
            or: 4,
            xor: 4,
            BEGIN: [5, 1],
            END: [5, 1],
            PRINT: [5, 1],
            PRINTF: [5, 1],
            GETC: [5, 1],
            READ: [5, 1],
            READLINE: [5, 1],
            DESTROY: [5, 1],
            TIE: [5, 1],
            TIEHANDLE: [5, 1],
            UNTIE: [5, 1],
            STDIN: 5,
            STDIN_TOP: 5,
            STDOUT: 5,
            STDOUT_TOP: 5,
            STDERR: 5,
            STDERR_TOP: 5,
            $ARG: 5,
            $_: 5,
            "@ARG": 5,
            "@_": 5,
            $LIST_SEPARATOR: 5,
            '$"': 5,
            $PROCESS_ID: 5,
            $PID: 5,
            $$: 5,
            $REAL_GROUP_ID: 5,
            $GID: 5,
            "$(": 5,
            $EFFECTIVE_GROUP_ID: 5,
            $EGID: 5,
            "$)": 5,
            $PROGRAM_NAME: 5,
            $0: 5,
            $SUBSCRIPT_SEPARATOR: 5,
            $SUBSEP: 5,
            "$;": 5,
            $REAL_USER_ID: 5,
            $UID: 5,
            "$<": 5,
            $EFFECTIVE_USER_ID: 5,
            $EUID: 5,
            "$>": 5,
            $a: 5,
            $b: 5,
            $COMPILING: 5,
            "$^C": 5,
            $DEBUGGING: 5,
            "$^D": 5,
            "${^ENCODING}": 5,
            $ENV: 5,
            "%ENV": 5,
            $SYSTEM_FD_MAX: 5,
            "$^F": 5,
            "@F": 5,
            "${^GLOBAL_PHASE}": 5,
            "$^H": 5,
            "%^H": 5,
            "@INC": 5,
            "%INC": 5,
            $INPLACE_EDIT: 5,
            "$^I": 5,
            "$^M": 5,
            $OSNAME: 5,
            "$^O": 5,
            "${^OPEN}": 5,
            $PERLDB: 5,
            "$^P": 5,
            $SIG: 5,
            "%SIG": 5,
            $BASETIME: 5,
            "$^T": 5,
            "${^TAINT}": 5,
            "${^UNICODE}": 5,
            "${^UTF8CACHE}": 5,
            "${^UTF8LOCALE}": 5,
            $PERL_VERSION: 5,
            "$^V": 5,
            "${^WIN32_SLOPPY_STAT}": 5,
            $EXECUTABLE_NAME: 5,
            "$^X": 5,
            $1: 5,
            $MATCH: 5,
            "$&": 5,
            "${^MATCH}": 5,
            $PREMATCH: 5,
            "$`": 5,
            "${^PREMATCH}": 5,
            $POSTMATCH: 5,
            "$'": 5,
            "${^POSTMATCH}": 5,
            $LAST_PAREN_MATCH: 5,
            "$+": 5,
            $LAST_SUBMATCH_RESULT: 5,
            "$^N": 5,
            "@LAST_MATCH_END": 5,
            "@+": 5,
            "%LAST_PAREN_MATCH": 5,
            "%+": 5,
            "@LAST_MATCH_START": 5,
            "@-": 5,
            "%LAST_MATCH_START": 5,
            "%-": 5,
            $LAST_REGEXP_CODE_RESULT: 5,
            "$^R": 5,
            "${^RE_DEBUG_FLAGS}": 5,
            "${^RE_TRIE_MAXBUF}": 5,
            $ARGV: 5,
            "@ARGV": 5,
            ARGV: 5,
            ARGVOUT: 5,
            $OUTPUT_FIELD_SEPARATOR: 5,
            $OFS: 5,
            "$,": 5,
            $INPUT_LINE_NUMBER: 5,
            $NR: 5,
            "$.": 5,
            $INPUT_RECORD_SEPARATOR: 5,
            $RS: 5,
            "$/": 5,
            $OUTPUT_RECORD_SEPARATOR: 5,
            $ORS: 5,
            "$\\": 5,
            $OUTPUT_AUTOFLUSH: 5,
            "$|": 5,
            $ACCUMULATOR: 5,
            "$^A": 5,
            $FORMAT_FORMFEED: 5,
            "$^L": 5,
            $FORMAT_PAGE_NUMBER: 5,
            "$%": 5,
            $FORMAT_LINES_LEFT: 5,
            "$-": 5,
            $FORMAT_LINE_BREAK_CHARACTERS: 5,
            "$:": 5,
            $FORMAT_LINES_PER_PAGE: 5,
            "$=": 5,
            $FORMAT_TOP_NAME: 5,
            "$^": 5,
            $FORMAT_NAME: 5,
            "$~": 5,
            "${^CHILD_ERROR_NATIVE}": 5,
            $EXTENDED_OS_ERROR: 5,
            "$^E": 5,
            $EXCEPTIONS_BEING_CAUGHT: 5,
            "$^S": 5,
            $WARNING: 5,
            "$^W": 5,
            "${^WARNING_BITS}": 5,
            $OS_ERROR: 5,
            $ERRNO: 5,
            "$!": 5,
            "%OS_ERROR": 5,
            "%ERRNO": 5,
            "%!": 5,
            $CHILD_ERROR: 5,
            "$?": 5,
            $EVAL_ERROR: 5,
            "$@": 5,
            $OFMT: 5,
            "$#": 5,
            "$*": 5,
            $ARRAY_BASE: 5,
            "$[": 5,
            $OLD_PERL_VERSION: 5,
            "$]": 5,
            "if": [1, 1],
            elsif: [1, 1],
            "else": [1, 1],
            "while": [1, 1],
            unless: [1, 1],
            "for": [1, 1],
            foreach: [1, 1],
            abs: 1,
            accept: 1,
            alarm: 1,
            atan2: 1,
            bind: 1,
            binmode: 1,
            bless: 1,
            bootstrap: 1,
            "break": 1,
            caller: 1,
            chdir: 1,
            chmod: 1,
            chomp: 1,
            chop: 1,
            chown: 1,
            chr: 1,
            chroot: 1,
            close: 1,
            closedir: 1,
            connect: 1,
            "continue": [1, 1],
            cos: 1,
            crypt: 1,
            dbmclose: 1,
            dbmopen: 1,
            "default": 1,
            defined: 1,
            "delete": 1,
            die: 1,
            "do": 1,
            dump: 1,
            each: 1,
            endgrent: 1,
            endhostent: 1,
            endnetent: 1,
            endprotoent: 1,
            endpwent: 1,
            endservent: 1,
            eof: 1,
            eval: 1,
            exec: 1,
            exists: 1,
            exit: 1,
            exp: 1,
            fcntl: 1,
            fileno: 1,
            flock: 1,
            fork: 1,
            format: 1,
            formline: 1,
            getc: 1,
            getgrent: 1,
            getgrgid: 1,
            getgrnam: 1,
            gethostbyaddr: 1,
            gethostbyname: 1,
            gethostent: 1,
            getlogin: 1,
            getnetbyaddr: 1,
            getnetbyname: 1,
            getnetent: 1,
            getpeername: 1,
            getpgrp: 1,
            getppid: 1,
            getpriority: 1,
            getprotobyname: 1,
            getprotobynumber: 1,
            getprotoent: 1,
            getpwent: 1,
            getpwnam: 1,
            getpwuid: 1,
            getservbyname: 1,
            getservbyport: 1,
            getservent: 1,
            getsockname: 1,
            getsockopt: 1,
            given: 1,
            glob: 1,
            gmtime: 1,
            "goto": 1,
            grep: 1,
            hex: 1,
            "import": 1,
            index: 1,
            "int": 1,
            ioctl: 1,
            join: 1,
            keys: 1,
            kill: 1,
            last: 1,
            lc: 1,
            lcfirst: 1,
            length: 1,
            link: 1,
            listen: 1,
            local: 2,
            localtime: 1,
            lock: 1,
            log: 1,
            lstat: 1,
            m: null,
            map: 1,
            mkdir: 1,
            msgctl: 1,
            msgget: 1,
            msgrcv: 1,
            msgsnd: 1,
            my: 2,
            "new": 1,
            next: 1,
            no: 1,
            oct: 1,
            open: 1,
            opendir: 1,
            ord: 1,
            our: 2,
            pack: 1,
            "package": 1,
            pipe: 1,
            pop: 1,
            pos: 1,
            print: 1,
            printf: 1,
            prototype: 1,
            push: 1,
            q: null,
            qq: null,
            qr: null,
            quotemeta: null,
            qw: null,
            qx: null,
            rand: 1,
            read: 1,
            readdir: 1,
            readline: 1,
            readlink: 1,
            readpipe: 1,
            recv: 1,
            redo: 1,
            ref: 1,
            rename: 1,
            require: 1,
            reset: 1,
            "return": 1,
            reverse: 1,
            rewinddir: 1,
            rindex: 1,
            rmdir: 1,
            s: null,
            say: 1,
            scalar: 1,
            seek: 1,
            seekdir: 1,
            select: 1,
            semctl: 1,
            semget: 1,
            semop: 1,
            send: 1,
            setgrent: 1,
            sethostent: 1,
            setnetent: 1,
            setpgrp: 1,
            setpriority: 1,
            setprotoent: 1,
            setpwent: 1,
            setservent: 1,
            setsockopt: 1,
            shift: 1,
            shmctl: 1,
            shmget: 1,
            shmread: 1,
            shmwrite: 1,
            shutdown: 1,
            sin: 1,
            sleep: 1,
            socket: 1,
            socketpair: 1,
            sort: 1,
            splice: 1,
            split: 1,
            sprintf: 1,
            sqrt: 1,
            srand: 1,
            stat: 1,
            state: 1,
            study: 1,
            sub: 1,
            substr: 1,
            symlink: 1,
            syscall: 1,
            sysopen: 1,
            sysread: 1,
            sysseek: 1,
            system: 1,
            syswrite: 1,
            tell: 1,
            telldir: 1,
            tie: 1,
            tied: 1,
            time: 1,
            times: 1,
            tr: null,
            truncate: 1,
            uc: 1,
            ucfirst: 1,
            umask: 1,
            undef: 1,
            unlink: 1,
            unpack: 1,
            unshift: 1,
            untie: 1,
            use: 1,
            utime: 1,
            values: 1,
            vec: 1,
            wait: 1,
            waitpid: 1,
            wantarray: 1,
            warn: 1,
            when: 1,
            write: 1,
            y: null
        },
        l = "string-2",
        c = /[goseximacplud]/;
        return {
            startState: function() {
                return {
                    tokenize: a,
                    chain: null,
                    style: null,
                    tail: null
                }
            },
            token: function(e, t) {
                return (t.tokenize || a)(e, t)
            },
            lineComment: "#"
        }
    }),
    e.registerHelper("wordChars", "perl", /[\w$]/),
    e.defineMIME("text/x-perl", "perl")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("lua",
    function(e, t) {
        function r(e) {
            return new RegExp("^(?:" + e.join("|") + ")", "i")
        }
        function n(e) {
            return new RegExp("^(?:" + e.join("|") + ")$", "i")
        }
        function i(e) {
            for (var t = 0; e.eat("=");)++t;
            return e.eat("["),
            t
        }
        function o(e, t) {
            var r = e.next();
            return "-" == r && e.eat("-") ? e.eat("[") && e.eat("[") ? (t.cur = a(i(e), "comment"))(e, t) : (e.skipToEnd(), "comment") : '"' == r || "'" == r ? (t.cur = s(r))(e, t) : "[" == r && /[\[=]/.test(e.peek()) ? (t.cur = a(i(e), "string"))(e, t) : /\d/.test(r) ? (e.eatWhile(/[\w.%]/), "number") : /[\w_]/.test(r) ? (e.eatWhile(/[\w\\\-_.]/), "variable") : null
        }
        function a(e, t) {
            return function(r, n) {
                for (var i, a = null; null != (i = r.next());) if (null == a)"]" == i && (a = 0);
                else if ("=" == i)++a;
                else {
                    if ("]" == i && a == e) {
                        n.cur = o;
                        break
                    }
                    a = null
                }
                return t
            }
        }
        function s(e) {
            return function(t, r) {
                for (var n, i = !1; null != (n = t.next()) && (n != e || i);) i = !i && "\\" == n;
                return i || (r.cur = o),
                "string"
            }
        }
        var l = e.indentUnit,
        c = n(t.specials || []),
        u = n(["_G", "_VERSION", "assert", "collectgarbage", "dofile", "error", "getfenv", "getmetatable", "ipairs", "load", "loadfile", "loadstring", "module", "next", "pairs", "pcall", "print", "rawequal", "rawget", "rawset", "require", "select", "setfenv", "setmetatable", "tonumber", "tostring", "type", "unpack", "xpcall", "coroutine.create", "coroutine.resume", "coroutine.running", "coroutine.status", "coroutine.wrap", "coroutine.yield", "debug.debug", "debug.getfenv", "debug.gethook", "debug.getinfo", "debug.getlocal", "debug.getmetatable", "debug.getregistry", "debug.getupvalue", "debug.setfenv", "debug.sethook", "debug.setlocal", "debug.setmetatable", "debug.setupvalue", "debug.traceback", "close", "flush", "lines", "read", "seek", "setvbuf", "write", "io.close", "io.flush", "io.input", "io.lines", "io.open", "io.output", "io.popen", "io.read", "io.stderr", "io.stdin", "io.stdout", "io.tmpfile", "io.type", "io.write", "math.abs", "math.acos", "math.asin", "math.atan", "math.atan2", "math.ceil", "math.cos", "math.cosh", "math.deg", "math.exp", "math.floor", "math.fmod", "math.frexp", "math.huge", "math.ldexp", "math.log", "math.log10", "math.max", "math.min", "math.modf", "math.pi", "math.pow", "math.rad", "math.random", "math.randomseed", "math.sin", "math.sinh", "math.sqrt", "math.tan", "math.tanh", "os.clock", "os.date", "os.difftime", "os.execute", "os.exit", "os.getenv", "os.remove", "os.rename", "os.setlocale", "os.time", "os.tmpname", "package.cpath", "package.loaded", "package.loaders", "package.loadlib", "package.path", "package.preload", "package.seeall", "string.byte", "string.char", "string.dump", "string.find", "string.format", "string.gmatch", "string.gsub", "string.len", "string.lower", "string.match", "string.rep", "string.reverse", "string.sub", "string.upper", "table.concat", "table.insert", "table.maxn", "table.remove", "table.sort"]),
        d = n(["and", "break", "elseif", "false", "nil", "not", "or", "return", "true", "function", "end", "if", "then", "else", "do", "while", "repeat", "until", "for", "in", "local"]),
        f = n(["function", "if", "repeat", "do", "\\(", "{"]),
        m = n(["end", "until", "\\)", "}"]),
        h = r(["end", "until", "\\)", "}", "else", "elseif"]);
        return {
            startState: function(e) {
                return {
                    basecol: e || 0,
                    indentDepth: 0,
                    cur: o
                }
            },
            token: function(e, t) {
                if (e.eatSpace()) return null;
                var r = t.cur(e, t),
                n = e.current();
                return "variable" == r && (d.test(n) ? r = "keyword": u.test(n) ? r = "builtin": c.test(n) && (r = "variable-2")),
                "comment" != r && "string" != r && (f.test(n) ? ++t.indentDepth: m.test(n) && --t.indentDepth),
                r
            },
            indent: function(e, t) {
                var r = h.test(t);
                return e.basecol + l * (e.indentDepth - (r ? 1 : 0))
            },
            lineComment: "--",
            blockCommentStart: "--[[",
            blockCommentEnd: "]]"
        }
    }),
    e.defineMIME("text/x-lua", "lua")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("r",
    function(e) {
        function t(e) {
            for (var t = e.split(" "), r = {},
            n = 0; n < t.length; ++n) r[t[n]] = !0;
            return r
        }
        function r(e, t) {
            a = null;
            var r = e.next();
            if ("#" == r) return e.skipToEnd(),
            "comment";
            if ("0" == r && e.eat("x")) return e.eatWhile(/[\da-f]/i),
            "number";
            if ("." == r && e.eat(/\d/)) return e.match(/\d*(?:e[+\-]?\d+)?/),
            "number";
            if (/\d/.test(r)) return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),
            "number";
            if ("'" == r || '"' == r) return t.tokenize = n(r),
            "string";
            if ("." == r && e.match(/.[.\d]+/)) return "keyword";
            if (/[\w\.]/.test(r) && "_" != r) {
                e.eatWhile(/[\w\.]/);
                var i = e.current();
                return s.propertyIsEnumerable(i) ? "atom": c.propertyIsEnumerable(i) ? (u.propertyIsEnumerable(i) && !e.match(/\s*if(\s+|$)/, !1) && (a = "block"), "keyword") : l.propertyIsEnumerable(i) ? "builtin": "variable"
            }
            return "%" == r ? (e.skipTo("%") && e.next(), "variable-2") : "<" == r && e.eat("-") ? "arrow": "=" == r && t.ctx.argList ? "arg-is": d.test(r) ? "$" == r ? "dollar": (e.eatWhile(d), "operator") : /[\(\){}\[\];]/.test(r) ? (a = r, ";" == r ? "semi": null) : null
        }
        function n(e) {
            return function(t, n) {
                if (t.eat("\\")) {
                    var i = t.next();
                    return "x" == i ? t.match(/^[a-f0-9]{2}/i) : ("u" == i || "U" == i) && t.eat("{") && t.skipTo("}") ? t.next() : "u" == i ? t.match(/^[a-f0-9]{4}/i) : "U" == i ? t.match(/^[a-f0-9]{8}/i) : /[0-7]/.test(i) && t.match(/^[0-7]{1,2}/),
                    "string-2"
                }
                for (var o; null != (o = t.next());) {
                    if (o == e) {
                        n.tokenize = r;
                        break
                    }
                    if ("\\" == o) {
                        t.backUp(1);
                        break
                    }
                }
                return "string"
            }
        }
        function i(e, t, r) {
            e.ctx = {
                type: t,
                indent: e.indent,
                align: null,
                column: r.column(),
                prev: e.ctx
            }
        }
        function o(e) {
            e.indent = e.ctx.indent,
            e.ctx = e.ctx.prev
        }
        var a, s = t("NULL NA Inf NaN NA_integer_ NA_real_ NA_complex_ NA_character_"),
        l = t("list quote bquote eval return call parse deparse"),
        c = t("if else repeat while function for in next break"),
        u = t("if else repeat while function for"),
        d = /[+\-*\/^<>=!&|~$:]/;
        return {
            startState: function() {
                return {
                    tokenize: r,
                    ctx: {
                        type: "top",
                        indent: -e.indentUnit,
                        align: !1
                    },
                    indent: 0,
                    afterIdent: !1
                }
            },
            token: function(e, t) {
                if (e.sol() && (null == t.ctx.align && (t.ctx.align = !1), t.indent = e.indentation()), e.eatSpace()) return null;
                var r = t.tokenize(e, t);
                "comment" != r && null == t.ctx.align && (t.ctx.align = !0);
                var n = t.ctx.type;
                return ";" != a && "{" != a && "}" != a || "block" != n || o(t),
                "{" == a ? i(t, "}", e) : "(" == a ? (i(t, ")", e), t.afterIdent && (t.ctx.argList = !0)) : "[" == a ? i(t, "]", e) : "block" == a ? i(t, "block", e) : a == n && o(t),
                t.afterIdent = "variable" == r || "keyword" == r,
                r
            },
            indent: function(t, n) {
                if (t.tokenize != r) return 0;
                var i = n && n.charAt(0),
                o = t.ctx,
                a = i == o.type;
                return "block" == o.type ? o.indent + ("{" == i ? 0 : e.indentUnit) : o.align ? o.column + (a ? 0 : 1) : o.indent + (a ? 0 : e.indentUnit)
            },
            lineComment: "#"
        }
    }),
    e.defineMIME("text/x-rsrc", "r")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("ruby",
    function(e) {
        function t(e) {
            for (var t = {},
            r = 0,
            n = e.length; n > r; ++r) t[e[r]] = !0;
            return t
        }
        function r(e, t, r) {
            return r.tokenize.push(e),
            e(t, r)
        }
        function n(e, t) {
            if (c = null, e.sol() && e.match("=begin") && e.eol()) return t.tokenize.push(l),
            "comment";
            if (e.eatSpace()) return null;
            var n, i = e.next();
            if ("`" == i || "'" == i || '"' == i) return r(a(i, "string", '"' == i || "`" == i), e, t);
            if ("/" == i) {
                var o = e.current().length;
                if (e.skipTo("/")) {
                    var u = e.current().length;
                    e.backUp(e.current().length - o);
                    for (var d = 0; e.current().length < u;) {
                        var f = e.next();
                        if ("(" == f ? d += 1 : ")" == f && (d -= 1), 0 > d) break
                    }
                    if (e.backUp(e.current().length - o), 0 == d) return r(a(i, "string-2", !0), e, t)
                }
                return "operator"
            }
            if ("%" == i) {
                var h = "string",
                p = !0;
                e.eat("s") ? h = "atom": e.eat(/[WQ]/) ? h = "string": e.eat(/[r]/) ? h = "string-2": e.eat(/[wxq]/) && (h = "string", p = !1);
                var g = e.eat(/[^\w\s=]/);
                return g ? (m.propertyIsEnumerable(g) && (g = m[g]), r(a(g, h, p, !0), e, t)) : "operator"
            }
            if ("#" == i) return e.skipToEnd(),
            "comment";
            if ("<" == i && (n = e.match(/^<-?[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/))) return r(s(n[1]), e, t);
            if ("0" == i) return e.eatWhile(e.eat("x") ? /[\da-fA-F]/: e.eat("b") ? /[01]/: /[0-7]/),
            "number";
            if (/\d/.test(i)) return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),
            "number";
            if ("?" == i) {
                for (; e.match(/^\\[CM]-/););
                return e.eat("\\") ? e.eatWhile(/\w/) : e.next(),
                "string"
            }
            if (":" == i) return e.eat("'") ? r(a("'", "atom", !1), e, t) : e.eat('"') ? r(a('"', "atom", !0), e, t) : e.eat(/[\<\>]/) ? (e.eat(/[\<\>]/), "atom") : e.eat(/[\+\-\*\/\&\|\:\!]/) ? "atom": e.eat(/[a-zA-Z$@_\xa1-\uffff]/) ? (e.eatWhile(/[\w$\xa1-\uffff]/), e.eat(/[\?\!\=]/), "atom") : "operator";
            if ("@" == i && e.match(/^@?[a-zA-Z_\xa1-\uffff]/)) return e.eat("@"),
            e.eatWhile(/[\w\xa1-\uffff]/),
            "variable-2";
            if ("$" == i) return e.eat(/[a-zA-Z_]/) ? e.eatWhile(/[\w]/) : e.eat(/\d/) ? e.eat(/\d/) : e.next(),
            "variable-3";
            if (/[a-zA-Z_\xa1-\uffff]/.test(i)) return e.eatWhile(/[\w\xa1-\uffff]/),
            e.eat(/[\?\!]/),
            e.eat(":") ? "atom": "ident";
            if ("|" != i || !t.varList && "{" != t.lastTok && "do" != t.lastTok) {
                if (/[\(\)\[\]{}\\;]/.test(i)) return c = i,
                null;
                if ("-" == i && e.eat(">")) return "arrow";
                if (/[=+\-\/*:\.^%<>~|]/.test(i)) {
                    var v = e.eatWhile(/[=+\-\/*:\.^%<>~|]/);
                    return "." != i || v || (c = "."),
                    "operator"
                }
                return null
            }
            return c = "|",
            null
        }
        function i(e) {
            return e || (e = 1),
            function(t, r) {
                if ("}" == t.peek()) {
                    if (1 == e) return r.tokenize.pop(),
                    r.tokenize[r.tokenize.length - 1](t, r);
                    r.tokenize[r.tokenize.length - 1] = i(e - 1)
                } else "{" == t.peek() && (r.tokenize[r.tokenize.length - 1] = i(e + 1));
                return n(t, r)
            }
        }
        function o() {
            var e = !1;
            return function(t, r) {
                return e ? (r.tokenize.pop(), r.tokenize[r.tokenize.length - 1](t, r)) : (e = !0, n(t, r))
            }
        }
        function a(e, t, r, n) {
            return function(a, s) {
                var l, c = !1;
                for ("read-quoted-paused" === s.context.type && (s.context = s.context.prev, a.eat("}")); null != (l = a.next());) {
                    if (l == e && (n || !c)) {
                        s.tokenize.pop();
                        break
                    }
                    if (r && "#" == l && !c) {
                        if (a.eat("{")) {
                            "}" == e && (s.context = {
                                prev: s.context,
                                type: "read-quoted-paused"
                            }),
                            s.tokenize.push(i());
                            break
                        }
                        if (/[@\$]/.test(a.peek())) {
                            s.tokenize.push(o());
                            break
                        }
                    }
                    c = !c && "\\" == l
                }
                return t
            }
        }
        function s(e) {
            return function(t, r) {
                return t.match(e) ? r.tokenize.pop() : t.skipToEnd(),
                "string"
            }
        }
        function l(e, t) {
            return e.sol() && e.match("=end") && e.eol() && t.tokenize.pop(),
            e.skipToEnd(),
            "comment"
        }
        var c, u = t(["alias", "and", "BEGIN", "begin", "break", "case", "class", "def", "defined?", "do", "else", "elsif", "END", "end", "ensure", "false", "for", "if", "in", "module", "next", "not", "or", "redo", "rescue", "retry", "return", "self", "super", "then", "true", "undef", "unless", "until", "when", "while", "yield", "nil", "raise", "throw", "catch", "fail", "loop", "callcc", "caller", "lambda", "proc", "public", "protected", "private", "require", "load", "require_relative", "extend", "autoload", "__END__", "__FILE__", "__LINE__", "__dir__"]),
        d = t(["def", "class", "case", "for", "while", "module", "then", "catch", "loop", "proc", "begin"]),
        f = t(["end", "until"]),
        m = {
            "[": "]",
            "{": "}",
            "(": ")"
        };
        return {
            startState: function() {
                return {
                    tokenize: [n],
                    indented: 0,
                    context: {
                        type: "top",
                        indented: -e.indentUnit
                    },
                    continuedLine: !1,
                    lastTok: null,
                    varList: !1
                }
            },
            token: function(e, t) {
                e.sol() && (t.indented = e.indentation());
                var r, n = t.tokenize[t.tokenize.length - 1](e, t),
                i = c;
                if ("ident" == n) {
                    var o = e.current();
                    n = "." == t.lastTok ? "property": u.propertyIsEnumerable(e.current()) ? "keyword": /^[A-Z]/.test(o) ? "tag": "def" == t.lastTok || "class" == t.lastTok || t.varList ? "def": "variable",
                    "keyword" == n && (i = o, d.propertyIsEnumerable(o) ? r = "indent": f.propertyIsEnumerable(o) ? r = "dedent": "if" != o && "unless" != o || e.column() != e.indentation() ? "do" == o && t.context.indented < t.indented && (r = "indent") : r = "indent")
                }
                return (c || n && "comment" != n) && (t.lastTok = i),
                "|" == c && (t.varList = !t.varList),
                "indent" == r || /[\(\[\{]/.test(c) ? t.context = {
                    prev: t.context,
                    type: c || n,
                    indented: t.indented
                }: ("dedent" == r || /[\)\]\}]/.test(c)) && t.context.prev && (t.context = t.context.prev),
                e.eol() && (t.continuedLine = "\\" == c || "operator" == n),
                n
            },
            indent: function(t, r) {
                if (t.tokenize[t.tokenize.length - 1] != n) return 0;
                var i = r && r.charAt(0),
                o = t.context,
                a = o.type == m[i] || "keyword" == o.type && /^(?:end|until|else|elsif|when|rescue)\b/.test(r);
                return o.indented + (a ? 0 : e.indentUnit) + (t.continuedLine ? e.indentUnit: 0)
            },
            electricChars: "}de",
            lineComment: "#"
        }
    }),
    e.defineMIME("text/x-ruby", "ruby")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../python/python"), require("../stex/stex"), require("../../addon/mode/overlay")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../python/python", "../stex/stex", "../../addon/mode/overlay"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("rst",
    function(t, r) {
        var n = /^\*\*[^\*\s](?:[^\*]*[^\*\s])?\*\*/,
        i = /^\*[^\*\s](?:[^\*]*[^\*\s])?\*/,
        o = /^``[^`\s](?:[^`]*[^`\s])``/,
        a = /^(?:[\d]+(?:[\.,]\d+)*)/,
        s = /^(?:\s\+[\d]+(?:[\.,]\d+)*)/,
        l = /^(?:\s\-[\d]+(?:[\.,]\d+)*)/,
        c = "[Hh][Tt][Tt][Pp][Ss]?://",
        u = "(?:[\\d\\w.-]+)\\.(?:\\w{2,6})",
        d = "(?:/[\\d\\w\\#\\%\\&\\-\\.\\,\\/\\:\\=\\?\\~]+)*",
        f = new RegExp("^" + c + u + d),
        m = {
            token: function(e) {
                if (e.match(n) && e.match(/\W+|$/, !1)) return "strong";
                if (e.match(i) && e.match(/\W+|$/, !1)) return "em";
                if (e.match(o) && e.match(/\W+|$/, !1)) return "string-2";
                if (e.match(a)) return "number";
                if (e.match(s)) return "positive";
                if (e.match(l)) return "negative";
                if (e.match(f)) return "link";
                for (; ! (null == e.next() || e.match(n, !1) || e.match(i, !1) || e.match(o, !1) || e.match(a, !1) || e.match(s, !1) || e.match(l, !1) || e.match(f, !1)););
                return null
            }
        },
        h = e.getMode(t, r.backdrop || "rst-base");
        return e.overlayMode(h, m, !0)
    },
    "python", "stex"),
    e.defineMode("rst-base",
    function(t) {
        function r(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return e.replace(/{(\d+)}/g,
            function(e, r) {
                return "undefined" != typeof t[r] ? t[r] : e
            })
        }
        function n(t, r) {
            var o = null;
            if (t.sol() && t.match(X, !1)) u(r, l, {
                mode: m,
                local: e.startState(m)
            });
            else if (t.sol() && t.match(T)) u(r, i),
            o = "meta";
            else if (t.sol() && t.match(S)) u(r, n),
            o = "header";
            else if (f(r) == $ || t.match($, !1)) switch (d(r)) {
            case 0:
                u(r, n, c($, 1)),
                t.match(/^:/),
                o = "meta";
                break;
            case 1:
                u(r, n, c($, 2)),
                t.match(y),
                o = "keyword",
                t.current().match(/^(?:math|latex)/) && (r.tmp_stex = !0);
                break;
            case 2:
                u(r, n, c($, 3)),
                t.match(/^:`/),
                o = "meta";
                break;
            case 3:
                if (r.tmp_stex && (r.tmp_stex = void 0, r.tmp = {
                    mode: h,
                    local: e.startState(h)
                }), r.tmp) {
                    if ("`" == t.peek()) {
                        u(r, n, c($, 4)),
                        r.tmp = void 0;
                        break
                    }
                    o = r.tmp.mode.token(t, r.tmp.local);
                    break
                }
                u(r, n, c($, 4)),
                t.match(C),
                o = "string";
                break;
            case 4:
                u(r, n, c($, 5)),
                t.match(/^`/),
                o = "meta";
                break;
            case 5:
                u(r, n, c($, 6)),
                t.match(v);
                break;
            default:
                u(r, n)
            } else if (f(r) == O || t.match(O, !1)) switch (d(r)) {
            case 0:
                u(r, n, c(O, 1)),
                t.match(/^`/),
                o = "meta";
                break;
            case 1:
                u(r, n, c(O, 2)),
                t.match(C),
                o = "string";
                break;
            case 2:
                u(r, n, c(O, 3)),
                t.match(/^`:/),
                o = "meta";
                break;
            case 3:
                u(r, n, c(O, 4)),
                t.match(y),
                o = "keyword";
                break;
            case 4:
                u(r, n, c(O, 5)),
                t.match(/^:/),
                o = "meta";
                break;
            case 5:
                u(r, n, c(O, 6)),
                t.match(v);
                break;
            default:
                u(r, n)
            } else if (f(r) == R || t.match(R, !1)) switch (d(r)) {
            case 0:
                u(r, n, c(R, 1)),
                t.match(/^:/),
                o = "meta";
                break;
            case 1:
                u(r, n, c(R, 2)),
                t.match(y),
                o = "keyword";
                break;
            case 2:
                u(r, n, c(R, 3)),
                t.match(/^:/),
                o = "meta";
                break;
            case 3:
                u(r, n, c(R, 4)),
                t.match(v);
                break;
            default:
                u(r, n)
            } else if (f(r) == z || t.match(z, !1)) switch (d(r)) {
            case 0:
                u(r, n, c(z, 1)),
                t.match(N),
                o = "variable-2";
                break;
            case 1:
                u(r, n, c(z, 2)),
                t.match(/^_?_?/) && (o = "link");
                break;
            default:
                u(r, n)
            } else if (t.match(I)) u(r, n),
            o = "quote";
            else if (t.match(P)) u(r, n),
            o = "quote";
            else if (t.match(D)) u(r, n),
            (!t.peek() || t.peek().match(/^\W$/)) && (o = "link");
            else if (f(r) == A || t.match(A, !1)) switch (d(r)) {
            case 0:
                !t.peek() || t.peek().match(/^\W$/) ? u(r, n, c(A, 1)) : t.match(A);
                break;
            case 1:
                u(r, n, c(A, 2)),
                t.match(/^`/),
                o = "link";
                break;
            case 2:
                u(r, n, c(A, 3)),
                t.match(C);
                break;
            case 3:
                u(r, n, c(A, 4)),
                t.match(/^`_/),
                o = "link";
                break;
            default:
                u(r, n)
            } else t.match(G) ? u(r, a) : t.next() && u(r, n);
            return o
        }
        function i(t, r) {
            var a = null;
            if (f(r) == E || t.match(E, !1)) switch (d(r)) {
            case 0:
                u(r, i, c(E, 1)),
                t.match(N),
                a = "variable-2";
                break;
            case 1:
                u(r, i, c(E, 2)),
                t.match(B);
                break;
            case 2:
                u(r, i, c(E, 3)),
                t.match(U),
                a = "keyword";
                break;
            case 3:
                u(r, i, c(E, 4)),
                t.match(W),
                a = "meta";
                break;
            default:
                u(r, n)
            } else if (f(r) == L || t.match(L, !1)) switch (d(r)) {
            case 0:
                u(r, i, c(L, 1)),
                t.match(F),
                a = "keyword",
                t.current().match(/^(?:math|latex)/) ? r.tmp_stex = !0 : t.current().match(/^python/) && (r.tmp_py = !0);
                break;
            case 1:
                u(r, i, c(L, 2)),
                t.match(H),
                a = "meta",
                (t.match(/^latex\s*$/) || r.tmp_stex) && (r.tmp_stex = void 0, u(r, l, {
                    mode: h,
                    local: e.startState(h)
                }));
                break;
            case 2:
                u(r, i, c(L, 3)),
                (t.match(/^python\s*$/) || r.tmp_py) && (r.tmp_py = void 0, u(r, l, {
                    mode: m,
                    local: e.startState(m)
                }));
                break;
            default:
                u(r, n)
            } else if (f(r) == M || t.match(M, !1)) switch (d(r)) {
            case 0:
                u(r, i, c(M, 1)),
                t.match(V),
                t.match(K),
                a = "link";
                break;
            case 1:
                u(r, i, c(M, 2)),
                t.match(Z),
                a = "meta";
                break;
            default:
                u(r, n)
            } else t.match(q) ? (u(r, n), a = "quote") : t.match(j) ? (u(r, n), a = "quote") : (t.eatSpace(), t.eol() ? u(r, n) : (t.skipToEnd(), u(r, o), a = "comment"));
            return a
        }
        function o(e, t) {
            return s(e, t, "comment")
        }
        function a(e, t) {
            return s(e, t, "meta")
        }
        function s(e, t, r) {
            return e.eol() || e.eatSpace() ? (e.skipToEnd(), r) : (u(t, n), null)
        }
        function l(e, t) {
            return t.ctx.mode && t.ctx.local ? e.sol() ? (e.eatSpace() || u(t, n), null) : t.ctx.mode.token(e, t.ctx.local) : (u(t, n), null)
        }
        function c(e, t, r, n) {
            return {
                phase: e,
                stage: t,
                mode: r,
                local: n
            }
        }
        function u(e, t, r) {
            e.tok = t,
            e.ctx = r || {}
        }
        function d(e) {
            return e.ctx.stage || 0
        }
        function f(e) {
            return e.ctx.phase
        }
        var m = e.getMode(t, "python"),
        h = e.getMode(t, "stex"),
        p = "\\s+",
        g = "(?:\\s*|\\W|$)",
        v = new RegExp(r("^{0}", g)),
        b = "(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",
        y = new RegExp(r("^{0}", b)),
        x = "(?:[^\\W\\d_](?:[\\w\\s!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",
        k = r("(?:{0}|`{1}`)", b, x),
        w = "(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)",
        _ = "(?:[^\\`]+)",
        C = new RegExp(r("^{0}", _)),
        S = new RegExp("^([!'#$%&\"()*+,-./:;<=>?@\\[\\\\\\]^_`{|}~])\\1{3,}\\s*$"),
        T = new RegExp(r("^\\.\\.{0}", p)),
        M = new RegExp(r("^_{0}:{1}|^__:{1}", k, g)),
        L = new RegExp(r("^{0}::{1}", k, g)),
        E = new RegExp(r("^\\|{0}\\|{1}{2}::{3}", w, p, k, g)),
        q = new RegExp(r("^\\[(?:\\d+|#{0}?|\\*)]{1}", k, g)),
        j = new RegExp(r("^\\[{0}\\]{1}", k, g)),
        z = new RegExp(r("^\\|{0}\\|", w)),
        I = new RegExp(r("^\\[(?:\\d+|#{0}?|\\*)]_", k)),
        P = new RegExp(r("^\\[{0}\\]_", k)),
        D = new RegExp(r("^{0}__?", k)),
        A = new RegExp(r("^`{0}`_", _)),
        $ = new RegExp(r("^:{0}:`{1}`{2}", b, _, g)),
        O = new RegExp(r("^`{1}`:{0}:{2}", b, _, g)),
        R = new RegExp(r("^:{0}:{1}", b, g)),
        F = new RegExp(r("^{0}", k)),
        H = new RegExp(r("^::{0}", g)),
        N = new RegExp(r("^\\|{0}\\|", w)),
        B = new RegExp(r("^{0}", p)),
        U = new RegExp(r("^{0}", k)),
        W = new RegExp(r("^::{0}", g)),
        V = new RegExp("^_"),
        K = new RegExp(r("^{0}|_", k)),
        Z = new RegExp(r("^:{0}", g)),
        G = new RegExp("^::\\s*$"),
        X = new RegExp("^\\s+(?:>>>|In \\[\\d+\\]:)\\s");
        return {
            startState: function() {
                return {
                    tok: n,
                    ctx: c(void 0, 0)
                }
            },
            copyState: function(t) {
                var r = t.ctx,
                n = t.tmp;
                return r.local && (r = {
                    mode: r.mode,
                    local: e.copyState(r.mode, r.local)
                }),
                n && (n = {
                    mode: n.mode,
                    local: e.copyState(n.mode, n.local)
                }),
                {
                    tok: t.tok,
                    ctx: r,
                    tmp: n
                }
            },
            innerMode: function(e) {
                return e.tmp ? {
                    state: e.tmp.local,
                    mode: e.tmp.mode
                }: e.ctx.mode ? {
                    state: e.ctx.local,
                    mode: e.ctx.mode
                }: null
            },
            token: function(e, t) {
                return t.tok(e, t)
            }
        }
    },
    "python", "stex"),
    e.defineMIME("text/x-rst", "rst")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../htmlmixed/htmlmixed"), require("../smarty/smarty")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../htmlmixed/htmlmixed", "../smarty/smarty"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("smartymixed",
    function(t) {
        function r(e) {
            return e.replace(/[^\s\w]/g, "\\$&")
        }
        var n = e.getMode(t, "htmlmixed"),
        i = e.getMode(t, "smarty"),
        o = {
            rightDelimiter: "}",
            leftDelimiter: "{"
        };
        t.hasOwnProperty("leftDelimiter") && (o.leftDelimiter = t.leftDelimiter),
        t.hasOwnProperty("rightDelimiter") && (o.rightDelimiter = t.rightDelimiter);
        var a = r(o.leftDelimiter),
        s = r(o.rightDelimiter),
        l = {
            smartyComment: new RegExp("^" + s + "\\*"),
            literalOpen: new RegExp(a + "literal" + s),
            literalClose: new RegExp(a + "/literal" + s),
            hasLeftDelimeter: new RegExp(".*" + a),
            htmlHasLeftDelimeter: new RegExp("[^<>]*" + a)
        },
        c = {
            chain: function(e, t, r) {
                return t.tokenize = r,
                r(e, t)
            },
            cleanChain: function(e, t, r) {
                return t.tokenize = null,
                t.localState = null,
                t.localMode = null,
                "string" == typeof r ? r ? r: null: r(e, t)
            },
            maybeBackup: function(e, t, r) {
                var n, i = e.current(),
                o = i.search(t);
                return o > -1 ? e.backUp(i.length - o) : (n = i.match(/<\/?$/)) && (e.backUp(i.length), e.match(t, !1) || e.match(i[0])),
                r
            }
        },
        u = {
            html: function(e, t) {
                var r = t.htmlMixedState.htmlState.context && t.htmlMixedState.htmlState.context.tagName ? t.htmlMixedState.htmlState.context.tagName: null;
                return ! t.inLiteral && e.match(l.htmlHasLeftDelimeter, !1) && null === r ? (t.tokenize = u.smarty, t.localMode = i, t.localState = i.startState(n.indent(t.htmlMixedState, "")), c.maybeBackup(e, o.leftDelimiter, i.token(e, t.localState))) : !t.inLiteral && e.match(o.leftDelimiter, !1) ? (t.tokenize = u.smarty, t.localMode = i, t.localState = i.startState(n.indent(t.htmlMixedState, "")), c.maybeBackup(e, o.leftDelimiter, i.token(e, t.localState))) : n.token(e, t.htmlMixedState)
            },
            smarty: function(e, t) {
                if (e.match(o.leftDelimiter, !1)) {
                    if (e.match(l.smartyComment, !1)) return c.chain(e, t, u.inBlock("comment", "*" + o.rightDelimiter))
                } else if (e.match(o.rightDelimiter, !1)) return e.eat(o.rightDelimiter),
                t.tokenize = u.html,
                t.localMode = n,
                t.localState = t.htmlMixedState,
                "tag";
                return c.maybeBackup(e, o.rightDelimiter, i.token(e, t.localState))
            },
            inBlock: function(e, t) {
                return function(r, n) {
                    for (; ! r.eol();) {
                        if (r.match(t)) {
                            c.cleanChain(r, n, "");
                            break
                        }
                        r.next()
                    }
                    return e
                }
            }
        };
        return {
            startState: function() {
                var e = n.startState();
                return {
                    token: u.html,
                    localMode: null,
                    localState: null,
                    htmlMixedState: e,
                    tokenize: null,
                    inLiteral: !1
                }
            },
            copyState: function(t) {
                var r = null,
                o = t.tokenize || t.token;
                return t.localState && (r = e.copyState(o != u.html ? i: n, t.localState)),
                {
                    token: t.token,
                    tokenize: t.tokenize,
                    localMode: t.localMode,
                    localState: r,
                    htmlMixedState: e.copyState(n, t.htmlMixedState),
                    inLiteral: t.inLiteral
                }
            },
            token: function(e, t) {
                if (e.match(o.leftDelimiter, !1)) {
                    if (!t.inLiteral && e.match(l.literalOpen, !0)) return t.inLiteral = !0,
                    "keyword";
                    if (t.inLiteral && e.match(l.literalClose, !0)) return t.inLiteral = !1,
                    "keyword"
                }
                t.inLiteral && t.localState != t.htmlMixedState && (t.tokenize = u.html, t.localMode = n, t.localState = t.htmlMixedState);
                var r = (t.tokenize || t.token)(e, t);
                return r
            },
            indent: function(t, r) {
                return t.localMode == i || t.inLiteral && !t.localMode || l.hasLeftDelimeter.test(r) ? e.Pass: n.indent(t.htmlMixedState, r)
            },
            innerMode: function(e) {
                return {
                    state: e.localState || e.htmlMixedState,
                    mode: e.localMode || n
                }
            }
        }
    },
    "htmlmixed", "smarty"),
    e.defineMIME("text/x-smarty", "smartymixed")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("vb",
    function(e, t) {
        function r(e) {
            return new RegExp("^((" + e.join(")|(") + "))\\b", "i")
        }
        function n(e, t) {
            t.currentIndent++
        }
        function i(e, t) {
            t.currentIndent--
        }
        function o(e, t) {
            if (e.eatSpace()) return null;
            var r = e.peek();
            if ("'" === r) return e.skipToEnd(),
            "comment";
            if (e.match(/^((&H)|(&O))?[0-9\.a-f]/i, !1)) {
                var o = !1;
                if (e.match(/^\d*\.\d+F?/i) ? o = !0 : e.match(/^\d+\.\d*F?/) ? o = !0 : e.match(/^\.\d+F?/) && (o = !0), o) return e.eat(/J/i),
                "number";
                var s = !1;
                if (e.match(/^&H[0-9a-f]+/i) ? s = !0 : e.match(/^&O[0-7]+/i) ? s = !0 : e.match(/^[1-9]\d*F?/) ? (e.eat(/J/i), s = !0) : e.match(/^0(?![\dx])/i) && (s = !0), s) return e.eat(/L/i),
                "number"
            }
            return e.match(_) ? (t.tokenize = a(e.current()), t.tokenize(e, t)) : e.match(m) || e.match(f) ? null: e.match(d) || e.match(c) || e.match(b) ? "operator": e.match(u) ? null: e.match(L) ? (n(e, t), t.doInCurrentLine = !0, "keyword") : e.match(C) ? (t.doInCurrentLine ? t.doInCurrentLine = !1 : n(e, t), "keyword") : e.match(S) ? "keyword": e.match(M) ? (i(e, t), i(e, t), "keyword") : e.match(T) ? (i(e, t), "keyword") : e.match(w) ? "keyword": e.match(k) ? "keyword": e.match(h) ? "variable": (e.next(), l)
        }
        function a(e) {
            var r = 1 == e.length,
            n = "string";
            return function(i, a) {
                for (; ! i.eol();) {
                    if (i.eatWhile(/[^'"]/), i.match(e)) return a.tokenize = o,
                    n;
                    i.eat(/['"]/)
                }
                if (r) {
                    if (t.singleLineStringErrors) return l;
                    a.tokenize = o
                }
                return n
            }
        }
        function s(e, t) {
            var r = t.tokenize(e, t),
            o = e.current();
            if ("." === o) return r = t.tokenize(e, t),
            o = e.current(),
            "variable" === r ? "variable": l;
            var a = "[({".indexOf(o);
            return - 1 !== a && n(e, t),
            "dedent" === E && i(e, t) ? l: (a = "])}".indexOf(o), -1 !== a && i(e, t) ? l: r)
        }
        var l = "error",
        c = new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),
        u = new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),
        d = new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),
        f = new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),
        m = new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),
        h = new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),
        p = ["class", "module", "sub", "enum", "select", "while", "if", "function", "get", "set", "property", "try"],
        g = ["else", "elseif", "case", "catch"],
        v = ["next", "loop"],
        b = r(["and", "or", "not", "xor", "in"]),
        y = ["as", "dim", "break", "continue", "optional", "then", "until", "goto", "byval", "byref", "new", "handles", "property", "return", "const", "private", "protected", "friend", "public", "shared", "static", "true", "false"],
        x = ["integer", "string", "double", "decimal", "boolean", "short", "char", "float", "single"],
        k = r(y),
        w = r(x),
        _ = '"',
        C = r(p),
        S = r(g),
        T = r(v),
        M = r(["end"]),
        L = r(["do"]),
        E = null,
        q = {
            electricChars: "dDpPtTfFeE ",
            startState: function() {
                return {
                    tokenize: o,
                    lastToken: null,
                    currentIndent: 0,
                    nextLineIndent: 0,
                    doInCurrentLine: !1
                }
            },
            token: function(e, t) {
                e.sol() && (t.currentIndent += t.nextLineIndent, t.nextLineIndent = 0, t.doInCurrentLine = 0);
                var r = s(e, t);
                return t.lastToken = {
                    style: r,
                    content: e.current()
                },
                r
            },
            indent: function(t, r) {
                var n = r.replace(/^\s+|\s+$/g, "");
                return n.match(T) || n.match(M) || n.match(S) ? e.indentUnit * (t.currentIndent - 1) : t.currentIndent < 0 ? 0 : t.currentIndent * e.indentUnit
            }
        };
        return q
    }),
    e.defineMIME("text/x-vb", "vb")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("vbscript",
    function(e, t) {
        function r(e) {
            return new RegExp("^((" + e.join(")|(") + "))\\b", "i")
        }
        function n(e, t) {
            t.currentIndent++
        }
        function i(e, t) {
            t.currentIndent--
        }
        function o(e, t) {
            if (e.eatSpace()) return "space";
            var r = e.peek();
            if ("'" === r) return e.skipToEnd(),
            "comment";
            if (e.match(H)) return e.skipToEnd(),
            "comment";
            if (e.match(/^((&H)|(&O))?[0-9\.]/i, !1) && !e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, !1)) {
                var o = !1;
                if (e.match(/^\d*\.\d+/i) ? o = !0 : e.match(/^\d+\.\d*/) ? o = !0 : e.match(/^\.\d+/) && (o = !0), o) return e.eat(/J/i),
                "number";
                var s = !1;
                if (e.match(/^&H[0-9a-f]+/i) ? s = !0 : e.match(/^&O[0-7]+/i) ? s = !0 : e.match(/^[1-9]\d*F?/) ? (e.eat(/J/i), s = !0) : e.match(/^0(?![\dx])/i) && (s = !0), s) return e.eat(/L/i),
                "number"
            }
            return e.match(P) ? (t.tokenize = a(e.current()), t.tokenize(e, t)) : e.match(u) || e.match(c) || e.match(v) ? "operator": e.match(d) ? null: e.match(f) ? "bracket": e.match(F) ? (t.doInCurrentLine = !0, "keyword") : e.match(R) ? (n(e, t), t.doInCurrentLine = !0, "keyword") : e.match(D) ? (t.doInCurrentLine ? t.doInCurrentLine = !1 : n(e, t), "keyword") : e.match(A) ? "keyword": e.match(O) ? (i(e, t), i(e, t), "keyword") : e.match($) ? (t.doInCurrentLine ? t.doInCurrentLine = !1 : i(e, t), "keyword") : e.match(E) ? "keyword": e.match(q) ? "atom": e.match(I) ? "variable-2": e.match(j) ? "builtin": e.match(z) ? "variable-2": e.match(m) ? "variable": (e.next(), l)
        }
        function a(e) {
            var r = 1 == e.length,
            n = "string";
            return function(i, a) {
                for (; ! i.eol();) {
                    if (i.eatWhile(/[^'"]/), i.match(e)) return a.tokenize = o,
                    n;
                    i.eat(/['"]/)
                }
                if (r) {
                    if (t.singleLineStringErrors) return l;
                    a.tokenize = o
                }
                return n
            }
        }
        function s(e, t) {
            var r = t.tokenize(e, t),
            n = e.current();
            return "." === n ? (r = t.tokenize(e, t), n = e.current(), !r || "variable" !== r.substr(0, 8) && "builtin" !== r && "keyword" !== r ? l: (("builtin" === r || "keyword" === r) && (r = "variable"), L.indexOf(n.substr(1)) > -1 && (r = "variable-2"), r)) : r
        }
        var l = "error",
        c = new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"),
        u = new RegExp("^((<>)|(<=)|(>=))"),
        d = new RegExp("^[\\.,]"),
        f = new RegExp("^[\\(\\)]"),
        m = new RegExp("^[A-Za-z][_A-Za-z0-9]*"),
        h = ["class", "sub", "select", "while", "if", "function", "property", "with", "for"],
        p = ["else", "elseif", "case"],
        g = ["next", "loop", "wend"],
        v = r(["and", "or", "not", "xor", "is", "mod", "eqv", "imp"]),
        b = ["dim", "redim", "then", "until", "randomize", "byval", "byref", "new", "property", "exit", "in", "const", "private", "public", "get", "set", "let", "stop", "on error resume next", "on error goto 0", "option explicit", "call", "me"],
        y = ["true", "false", "nothing", "empty", "null"],
        x = ["abs", "array", "asc", "atn", "cbool", "cbyte", "ccur", "cdate", "cdbl", "chr", "cint", "clng", "cos", "csng", "cstr", "date", "dateadd", "datediff", "datepart", "dateserial", "datevalue", "day", "escape", "eval", "execute", "exp", "filter", "formatcurrency", "formatdatetime", "formatnumber", "formatpercent", "getlocale", "getobject", "getref", "hex", "hour", "inputbox", "instr", "instrrev", "int", "fix", "isarray", "isdate", "isempty", "isnull", "isnumeric", "isobject", "join", "lbound", "lcase", "left", "len", "loadpicture", "log", "ltrim", "rtrim", "trim", "maths", "mid", "minute", "month", "monthname", "msgbox", "now", "oct", "replace", "rgb", "right", "rnd", "round", "scriptengine", "scriptenginebuildversion", "scriptenginemajorversion", "scriptengineminorversion", "second", "setlocale", "sgn", "sin", "space", "split", "sqr", "strcomp", "string", "strreverse", "tan", "time", "timer", "timeserial", "timevalue", "typename", "ubound", "ucase", "unescape", "vartype", "weekday", "weekdayname", "year"],
        k = ["vbBlack", "vbRed", "vbGreen", "vbYellow", "vbBlue", "vbMagenta", "vbCyan", "vbWhite", "vbBinaryCompare", "vbTextCompare", "vbSunday", "vbMonday", "vbTuesday", "vbWednesday", "vbThursday", "vbFriday", "vbSaturday", "vbUseSystemDayOfWeek", "vbFirstJan1", "vbFirstFourDays", "vbFirstFullWeek", "vbGeneralDate", "vbLongDate", "vbShortDate", "vbLongTime", "vbShortTime", "vbObjectError", "vbOKOnly", "vbOKCancel", "vbAbortRetryIgnore", "vbYesNoCancel", "vbYesNo", "vbRetryCancel", "vbCritical", "vbQuestion", "vbExclamation", "vbInformation", "vbDefaultButton1", "vbDefaultButton2", "vbDefaultButton3", "vbDefaultButton4", "vbApplicationModal", "vbSystemModal", "vbOK", "vbCancel", "vbAbort", "vbRetry", "vbIgnore", "vbYes", "vbNo", "vbCr", "VbCrLf", "vbFormFeed", "vbLf", "vbNewLine", "vbNullChar", "vbNullString", "vbTab", "vbVerticalTab", "vbUseDefault", "vbTrue", "vbFalse", "vbEmpty", "vbNull", "vbInteger", "vbLong", "vbSingle", "vbDouble", "vbCurrency", "vbDate", "vbString", "vbObject", "vbError", "vbBoolean", "vbVariant", "vbDataObject", "vbDecimal", "vbByte", "vbArray"],
        w = ["WScript", "err", "debug", "RegExp"],
        _ = ["description", "firstindex", "global", "helpcontext", "helpfile", "ignorecase", "length", "number", "pattern", "source", "value", "count"],
        C = ["clear", "execute", "raise", "replace", "test", "write", "writeline", "close", "open", "state", "eof", "update", "addnew", "end", "createobject", "quit"],
        S = ["server", "response", "request", "session", "application"],
        T = ["buffer", "cachecontrol", "charset", "contenttype", "expires", "expiresabsolute", "isclientconnected", "pics", "status", "clientcertificate", "cookies", "form", "querystring", "servervariables", "totalbytes", "contents", "staticobjects", "codepage", "lcid", "sessionid", "timeout", "scripttimeout"],
        M = ["addheader", "appendtolog", "binarywrite", "end", "flush", "redirect", "binaryread", "remove", "removeall", "lock", "unlock", "abandon", "getlasterror", "htmlencode", "mappath", "transfer", "urlencode"],
        L = C.concat(_);
        w = w.concat(k),
        e.isASP && (w = w.concat(S), L = L.concat(M, T));
        var E = r(b),
        q = r(y),
        j = r(x),
        z = r(w),
        I = r(L),
        P = '"',
        D = r(h),
        A = r(p),
        $ = r(g),
        O = r(["end"]),
        R = r(["do"]),
        F = r(["on error resume next", "exit"]),
        H = r(["rem"]),
        N = {
            electricChars: "dDpPtTfFeE ",
            startState: function() {
                return {
                    tokenize: o,
                    lastToken: null,
                    currentIndent: 0,
                    nextLineIndent: 0,
                    doInCurrentLine: !1,
                    ignoreKeyword: !1
                }
            },
            token: function(e, t) {
                e.sol() && (t.currentIndent += t.nextLineIndent, t.nextLineIndent = 0, t.doInCurrentLine = 0);
                var r = s(e, t);
                return t.lastToken = {
                    style: r,
                    content: e.current()
                },
                "space" === r && (r = null),
                r
            },
            indent: function(t, r) {
                var n = r.replace(/^\s+|\s+$/g, "");
                return n.match($) || n.match(O) || n.match(A) ? e.indentUnit * (t.currentIndent - 1) : t.currentIndent < 0 ? 0 : t.currentIndent * e.indentUnit
            }
        };
        return N
    }),
    e.defineMIME("text/vbscript", "vbscript")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("velocity",
    function() {
        function e(e) {
            for (var t = {},
            r = e.split(" "), n = 0; n < r.length; ++n) t[r[n]] = !0;
            return t
        }
        function t(e, t, r) {
            return t.tokenize = r,
            r(e, t)
        }
        function r(e, r) {
            var u = r.beforeParams;
            r.beforeParams = !1;
            var d = e.next();
            if ("'" == d && r.inParams) return r.lastTokenWasBuiltin = !1,
            t(e, r, n(d));
            if ('"' != d) {
                if (/[\[\]{}\(\),;\.]/.test(d)) return "(" == d && u ? r.inParams = !0 : ")" == d && (r.inParams = !1, r.lastTokenWasBuiltin = !0),
                null;
                if (/\d/.test(d)) return r.lastTokenWasBuiltin = !1,
                e.eatWhile(/[\w\.]/),
                "number";
                if ("#" == d && e.eat("*")) return r.lastTokenWasBuiltin = !1,
                t(e, r, i);
                if ("#" == d && e.match(/ *\[ *\[/)) return r.lastTokenWasBuiltin = !1,
                t(e, r, o);
                if ("#" == d && e.eat("#")) return r.lastTokenWasBuiltin = !1,
                e.skipToEnd(),
                "comment";
                if ("$" == d) return e.eatWhile(/[\w\d\$_\.{}]/),
                l && l.propertyIsEnumerable(e.current()) ? "keyword": (r.lastTokenWasBuiltin = !0, r.beforeParams = !0, "builtin");
                if (c.test(d)) return r.lastTokenWasBuiltin = !1,
                e.eatWhile(c),
                "operator";
                e.eatWhile(/[\w\$_{}@]/);
                var f = e.current();
                return a && a.propertyIsEnumerable(f) ? "keyword": s && s.propertyIsEnumerable(f) || e.current().match(/^#@?[a-z0-9_]+ *$/i) && "(" == e.peek() && (!s || !s.propertyIsEnumerable(f.toLowerCase())) ? (r.beforeParams = !0, r.lastTokenWasBuiltin = !1, "keyword") : r.inString ? (r.lastTokenWasBuiltin = !1, "string") : e.pos > f.length && "." == e.string.charAt(e.pos - f.length - 1) && r.lastTokenWasBuiltin ? "builtin": (r.lastTokenWasBuiltin = !1, null)
            }
            return r.lastTokenWasBuiltin = !1,
            r.inString ? (r.inString = !1, "string") : r.inParams ? t(e, r, n(d)) : void 0
        }
        function n(e) {
            return function(t, n) {
                for (var i, o = !1,
                a = !1; null != (i = t.next());) {
                    if (i == e && !o) {
                        a = !0;
                        break
                    }
                    if ('"' == e && "$" == t.peek() && !o) {
                        n.inString = !0,
                        a = !0;
                        break
                    }
                    o = !o && "\\" == i
                }
                return a && (n.tokenize = r),
                "string"
            }
        }
        function i(e, t) {
            for (var n, i = !1; n = e.next();) {
                if ("#" == n && i) {
                    t.tokenize = r;
                    break
                }
                i = "*" == n
            }
            return "comment"
        }
        function o(e, t) {
            for (var n, i = 0; n = e.next();) {
                if ("#" == n && 2 == i) {
                    t.tokenize = r;
                    break
                }
                "]" == n ? i++:" " != n && (i = 0)
            }
            return "meta"
        }
        var a = e("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),
        s = e("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),
        l = e("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),
        c = /[+\-*&%=<>!?:\/|]/;
        return {
            startState: function() {
                return {
                    tokenize: r,
                    beforeParams: !1,
                    inParams: !1,
                    inString: !1,
                    lastTokenWasBuiltin: !1
                }
            },
            token: function(e, t) {
                return e.eatSpace() ? null: t.tokenize(e, t)
            },
            blockCommentStart: "#*",
            blockCommentEnd: "*#",
            lineComment: "##",
            fold: "velocity"
        }
    }),
    e.defineMIME("text/velocity", "velocity")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("xquery",
    function() {
        function e(e, t, r) {
            return y = e,
            x = r,
            t
        }
        function t(e, t, r) {
            return t.tokenize = r,
            r(e, t)
        }
        function r(r, s) {
            var f = r.next(),
            h = !1,
            g = p(r);
            if ("<" == f) {
                if (r.match("!--", !0)) return t(r, s, l);
                if (r.match("![CDATA", !1)) return s.tokenize = c,
                e("tag", "tag");
                if (r.match("?", !1)) return t(r, s, u);
                var y = r.eat("/");
                r.eatSpace();
                for (var x, w = ""; x = r.eat(/[^\s\u00a0=<>\"\'\/?]/);) w += x;
                return t(r, s, a(w, y))
            }
            if ("{" == f) return v(s, {
                type: "codeblock"
            }),
            e("", null);
            if ("}" == f) return b(s),
            e("", null);
            if (d(s)) return ">" == f ? e("tag", "tag") : "/" == f && r.eat(">") ? (b(s), e("tag", "tag")) : e("word", "variable");
            if (/\d/.test(f)) return r.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),
            e("number", "atom");
            if ("(" === f && r.eat(":")) return v(s, {
                type: "comment"
            }),
            t(r, s, n);
            if (g || '"' !== f && "'" !== f) {
                if ("$" === f) return t(r, s, o);
                if (":" === f && r.eat("=")) return e("operator", "keyword");
                if ("(" === f) return v(s, {
                    type: "paren"
                }),
                e("", null);
                if (")" === f) return b(s),
                e("", null);
                if ("[" === f) return v(s, {
                    type: "bracket"
                }),
                e("", null);
                if ("]" === f) return b(s),
                e("", null);
                var _ = k.propertyIsEnumerable(f) && k[f];
                if (g && '"' === f) for (;
                '"' !== r.next(););
                if (g && "'" === f) for (;
                "'" !== r.next(););
                _ || r.eatWhile(/[\w\$_-]/);
                var C = r.eat(":"); ! r.eat(":") && C && r.eatWhile(/[\w\$_-]/),
                r.match(/^[ \t]*\(/, !1) && (h = !0);
                var S = r.current();
                return _ = k.propertyIsEnumerable(S) && k[S],
                h && !_ && (_ = {
                    type: "function_call",
                    style: "variable def"
                }),
                m(s) ? (b(s), e("word", "variable", S)) : (("element" == S || "attribute" == S || "axis_specifier" == _.type) && v(s, {
                    type: "xmlconstructor"
                }), _ ? e(_.type, _.style, S) : e("word", "variable", S))
            }
            return t(r, s, i(f))
        }
        function n(t, r) {
            for (var n, i = !1,
            o = !1,
            a = 0; n = t.next();) {
                if (")" == n && i) {
                    if (! (a > 0)) {
                        b(r);
                        break
                    }
                    a--
                } else ":" == n && o && a++;
                i = ":" == n,
                o = "(" == n
            }
            return e("comment", "comment")
        }
        function i(t, n) {
            return function(o, a) {
                var s;
                if (h(a) && o.current() == t) return b(a),
                n && (a.tokenize = n),
                e("string", "string");
                if (v(a, {
                    type: "string",
                    name: t,
                    tokenize: i(t, n)
                }), o.match("{", !1) && f(a)) return a.tokenize = r,
                e("string", "string");
                for (; s = o.next();) {
                    if (s == t) {
                        b(a),
                        n && (a.tokenize = n);
                        break
                    }
                    if (o.match("{", !1) && f(a)) return a.tokenize = r,
                    e("string", "string")
                }
                return e("string", "string")
            }
        }
        function o(t, n) {
            var i = /[\w\$_-]/;
            if (t.eat('"')) {
                for (;
                '"' !== t.next(););
                t.eat(":")
            } else t.eatWhile(i),
            t.match(":=", !1) || t.eat(":");
            return t.eatWhile(i),
            n.tokenize = r,
            e("variable", "variable")
        }
        function a(t, n) {
            return function(i, o) {
                return i.eatSpace(),
                n && i.eat(">") ? (b(o), o.tokenize = r, e("tag", "tag")) : (i.eat("/") || v(o, {
                    type: "tag",
                    name: t,
                    tokenize: r
                }), i.eat(">") ? (o.tokenize = r, e("tag", "tag")) : (o.tokenize = s, e("tag", "tag")))
            }
        }
        function s(n, o) {
            var a = n.next();
            return "/" == a && n.eat(">") ? (f(o) && b(o), d(o) && b(o), e("tag", "tag")) : ">" == a ? (f(o) && b(o), e("tag", "tag")) : "=" == a ? e("", null) : '"' == a || "'" == a ? t(n, o, i(a, s)) : (f(o) || v(o, {
                type: "attribute",
                tokenize: s
            }), n.eat(/[a-zA-Z_:]/), n.eatWhile(/[-a-zA-Z0-9_:.]/), n.eatSpace(), (n.match(">", !1) || n.match("/", !1)) && (b(o), o.tokenize = r), e("attribute", "attribute"))
        }
        function l(t, n) {
            for (var i; i = t.next();) if ("-" == i && t.match("->", !0)) return n.tokenize = r,
            e("comment", "comment")
        }
        function c(t, n) {
            for (var i; i = t.next();) if ("]" == i && t.match("]", !0)) return n.tokenize = r,
            e("comment", "comment")
        }
        function u(t, n) {
            for (var i; i = t.next();) if ("?" == i && t.match(">", !0)) return n.tokenize = r,
            e("comment", "comment meta")
        }
        function d(e) {
            return g(e, "tag")
        }
        function f(e) {
            return g(e, "attribute")
        }
        function m(e) {
            return g(e, "xmlconstructor")
        }
        function h(e) {
            return g(e, "string")
        }
        function p(e) {
            return '"' === e.current() ? e.match(/^[^\"]+\"\:/, !1) : "'" === e.current() ? e.match(/^[^\"]+\'\:/, !1) : !1
        }
        function g(e, t) {
            return e.stack.length && e.stack[e.stack.length - 1].type == t
        }
        function v(e, t) {
            e.stack.push(t)
        }
        function b(e) {
            e.stack.pop();
            var t = e.stack.length && e.stack[e.stack.length - 1].tokenize;
            e.tokenize = t || r
        }
        var y, x, k = function() {
            function e(e) {
                return {
                    type: e,
                    style: "keyword"
                }
            }
            for (var t = e("keyword a"), r = e("keyword b"), n = e("keyword c"), i = e("operator"), o = {
                type: "atom",
                style: "atom"
            },
            a = {
                type: "punctuation",
                style: null
            },
            s = {
                type: "axis_specifier",
                style: "qualifier"
            },
            l = {
                "if": t,
                "switch": t,
                "while": t,
                "for": t,
                "else": r,
                then: r,
                "try": r,
                "finally": r,
                "catch": r,
                element: n,
                attribute: n,
                let: n,
                "implements": n,
                "import": n,
                module: n,
                namespace: n,
                "return": n,
                "super": n,
                "this": n,
                "throws": n,
                where: n,
                "private": n,
                ",": a,
                "null": o,
                "fn:false()": o,
                "fn:true()": o
            },
            c = ["after", "ancestor", "ancestor-or-self", "and", "as", "ascending", "assert", "attribute", "before", "by", "case", "cast", "child", "comment", "declare", "default", "define", "descendant", "descendant-or-self", "descending", "document", "document-node", "element", "else", "eq", "every", "except", "external", "following", "following-sibling", "follows", "for", "function", "if", "import", "in", "instance", "intersect", "item", "let", "module", "namespace", "node", "node", "of", "only", "or", "order", "parent", "precedes", "preceding", "preceding-sibling", "processing-instruction", "ref", "return", "returns", "satisfies", "schema", "schema-element", "self", "some", "sortby", "stable", "text", "then", "to", "treat", "typeswitch", "union", "variable", "version", "where", "xquery", "empty-sequence"], u = 0, d = c.length; d > u; u++) l[c[u]] = e(c[u]);
            for (var f = ["xs:string", "xs:float", "xs:decimal", "xs:double", "xs:integer", "xs:boolean", "xs:date", "xs:dateTime", "xs:time", "xs:duration", "xs:dayTimeDuration", "xs:time", "xs:yearMonthDuration", "numeric", "xs:hexBinary", "xs:base64Binary", "xs:anyURI", "xs:QName", "xs:byte", "xs:boolean", "xs:anyURI", "xf:yearMonthDuration"], u = 0, d = f.length; d > u; u++) l[f[u]] = o;
            for (var m = ["eq", "ne", "lt", "le", "gt", "ge", ":=", "=", ">", ">=", "<", "<=", ".", "|", "?", "and", "or", "div", "idiv", "mod", "*", "/", "+", "-"], u = 0, d = m.length; d > u; u++) l[m[u]] = i;
            for (var h = ["self::", "attribute::", "child::", "descendant::", "descendant-or-self::", "parent::", "ancestor::", "ancestor-or-self::", "following::", "preceding::", "following-sibling::", "preceding-sibling::"], u = 0, d = h.length; d > u; u++) l[h[u]] = s;
            return l
        } ();
        return {
            startState: function() {
                return {
                    tokenize: r,
                    cc: [],
                    stack: []
                }
            },
            token: function(e, t) {
                if (e.eatSpace()) return null;
                var r = t.tokenize(e, t);
                return r
            },
            blockCommentStart: "(:",
            blockCommentEnd: ":)"
        }
    }),
    e.defineMIME("application/xquery", "xquery")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("yaml",
    function() {
        var e = ["true", "false", "on", "off", "yes", "no"],
        t = new RegExp("\\b((" + e.join(")|(") + "))$", "i");
        return {
            token: function(e, r) {
                var n = e.peek(),
                i = r.escaped;
                if (r.escaped = !1, "#" == n && (0 == e.pos || /\s/.test(e.string.charAt(e.pos - 1)))) return e.skipToEnd(),
                "comment";
                if (e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/)) return "string";
                if (r.literal && e.indentation() > r.keyCol) return e.skipToEnd(),
                "string";
                if (r.literal && (r.literal = !1), e.sol()) {
                    if (r.keyCol = 0, r.pair = !1, r.pairStart = !1, e.match(/---/)) return "def";
                    if (e.match(/\.\.\./)) return "def";
                    if (e.match(/\s*-\s+/)) return "meta"
                }
                if (e.match(/^(\{|\}|\[|\])/)) return "{" == n ? r.inlinePairs++:"}" == n ? r.inlinePairs--:"[" == n ? r.inlineList++:r.inlineList--,
                "meta";
                if (r.inlineList > 0 && !i && "," == n) return e.next(),
                "meta";
                if (r.inlinePairs > 0 && !i && "," == n) return r.keyCol = 0,
                r.pair = !1,
                r.pairStart = !1,
                e.next(),
                "meta";
                if (r.pairStart) {
                    if (e.match(/^\s*(\||\>)\s*/)) return r.literal = !0,
                    "meta";
                    if (e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i)) return "variable-2";
                    if (0 == r.inlinePairs && e.match(/^\s*-?[0-9\.\,]+\s?$/)) return "number";
                    if (r.inlinePairs > 0 && e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/)) return "number";
                    if (e.match(t)) return "keyword"
                }
                return ! r.pair && e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/) ? (r.pair = !0, r.keyCol = e.indentation(), "atom") : r.pair && e.match(/^:\s*/) ? (r.pairStart = !0, "meta") : (r.pairStart = !1, r.escaped = "\\" == n, e.next(), null)
            },
            startState: function() {
                return {
                    pair: !1,
                    pairStart: !1,
                    keyCol: 0,
                    inlinePairs: 0,
                    inlineList: 0,
                    literal: !1,
                    escaped: !1
                }
            }
        }
    }),
    e.defineMIME("text/x-yaml", "yaml")
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMIME("text/x-erlang", "erlang"),
    e.defineMode("erlang",
    function(t) {
        function r(e, t) {
            if (t.in_string) return t.in_string = !o(e),
            u(t, e, "string");
            if (t.in_atom) return t.in_atom = !a(e),
            u(t, e, "atom");
            if (e.eatSpace()) return u(t, e, "whitespace");
            if (!h(t) && e.match(/-\s*[a-z??-????-??][\w??-????-????-????-??]*/)) return c(e.current(), T) ? u(t, e, "type") : u(t, e, "attribute");
            var r = e.next();
            if ("%" == r) return e.skipToEnd(),
            u(t, e, "comment");
            if (":" == r) return u(t, e, "colon");
            if ("?" == r) return e.eatSpace(),
            e.eatWhile(R),
            u(t, e, "macro");
            if ("#" == r) return e.eatSpace(),
            e.eatWhile(R),
            u(t, e, "record");
            if ("$" == r) return "\\" != e.next() || e.match(F) ? u(t, e, "number") : u(t, e, "error");
            if ("." == r) return u(t, e, "dot");
            if ("'" == r) {
                if (! (t.in_atom = !a(e))) {
                    if (e.match(/\s*\/\s*[0-9]/, !1)) return e.match(/\s*\/\s*[0-9]/, !0),
                    u(t, e, "fun");
                    if (e.match(/\s*\(/, !1) || e.match(/\s*:/, !1)) return u(t, e, "function")
                }
                return u(t, e, "atom")
            }
            if ('"' == r) return t.in_string = !o(e),
            u(t, e, "string");
            if (/[A-Z_??-????-??]/.test(r)) return e.eatWhile(R),
            u(t, e, "variable");
            if (/[a-z_??-????-??]/.test(r)) {
                if (e.eatWhile(R), e.match(/\s*\/\s*[0-9]/, !1)) return e.match(/\s*\/\s*[0-9]/, !0),
                u(t, e, "fun");
                var s = e.current();
                return c(s, M) ? u(t, e, "keyword") : c(s, q) ? u(t, e, "operator") : e.match(/\s*\(/, !1) ? !c(s, O) || ":" == h(t).token && "erlang" != h(t, 2).token ? c(s, $) ? u(t, e, "guard") : u(t, e, "function") : u(t, e, "builtin") : c(s, q) ? u(t, e, "operator") : ":" == l(e) ? "erlang" == s ? u(t, e, "builtin") : u(t, e, "function") : c(s, ["true", "false"]) ? u(t, e, "boolean") : c(s, ["true", "false"]) ? u(t, e, "boolean") : u(t, e, "atom")
            }
            var d = /[0-9]/,
            f = /[0-9a-zA-Z]/;
            return d.test(r) ? (e.eatWhile(d), e.eat("#") ? e.eatWhile(f) || e.backUp(1) : e.eat(".") && (e.eatWhile(d) ? e.eat(/[eE]/) && (e.eat(/[-+]/) ? e.eatWhile(d) || e.backUp(2) : e.eatWhile(d) || e.backUp(1)) : e.backUp(1)), u(t, e, "number")) : n(e, I, P) ? u(t, e, "open_paren") : n(e, D, A) ? u(t, e, "close_paren") : i(e, L, E) ? u(t, e, "separator") : i(e, j, z) ? u(t, e, "operator") : u(t, e, null)
        }
        function n(e, t, r) {
            if (1 == e.current().length && t.test(e.current())) {
                for (e.backUp(1); t.test(e.peek());) if (e.next(), c(e.current(), r)) return ! 0;
                e.backUp(e.current().length - 1)
            }
            return ! 1
        }
        function i(e, t, r) {
            if (1 == e.current().length && t.test(e.current())) {
                for (; t.test(e.peek());) e.next();
                for (; 0 < e.current().length;) {
                    if (c(e.current(), r)) return ! 0;
                    e.backUp(1)
                }
                e.next()
            }
            return ! 1
        }
        function o(e) {
            return s(e, '"', "\\")
        }
        function a(e) {
            return s(e, "'", "\\")
        }
        function s(e, t, r) {
            for (; ! e.eol();) {
                var n = e.next();
                if (n == t) return ! 0;
                n == r && e.next()
            }
            return ! 1
        }
        function l(e) {
            var t = e.match(/([\n\s]+|%[^\n]*\n)*(.)/, !1);
            return t ? t.pop() : ""
        }
        function c(e, t) {
            return - 1 < t.indexOf(e)
        }
        function u(e, t, r) {
            switch (p(e, f(r, t)), r) {
            case "atom":
                return "atom";
            case "attribute":
                return "attribute";
            case "boolean":
                return "atom";
            case "builtin":
                return "builtin";
            case "close_paren":
                return null;
            case "colon":
                return null;
            case "comment":
                return "comment";
            case "dot":
                return null;
            case "error":
                return "error";
            case "fun":
                return "meta";
            case "function":
                return "tag";
            case "guard":
                return "property";
            case "keyword":
                return "keyword";
            case "macro":
                return "variable-2";
            case "number":
                return "number";
            case "open_paren":
                return null;
            case "operator":
                return "operator";
            case "record":
                return "bracket";
            case "separator":
                return null;
            case "string":
                return "string";
            case "type":
                return "def";
            case "variable":
                return "variable";
            default:
                return null
            }
        }
        function d(e, t, r, n) {
            return {
                token: e,
                column: t,
                indent: r,
                type: n
            }
        }
        function f(e, t) {
            return d(t.current(), t.column(), t.indentation(), e)
        }
        function m(e) {
            return d(e, 0, 0, e)
        }
        function h(e, t) {
            var r = e.tokenStack.length,
            n = t ? t: 1;
            return n > r ? !1 : e.tokenStack[r - n]
        }
        function p(e, t) {
            "comment" != t.type && "whitespace" != t.type && (e.tokenStack = g(e.tokenStack, t), e.tokenStack = v(e.tokenStack))
        }
        function g(e, t) {
            var r = e.length - 1;
            return r > 0 && "record" === e[r].type && "dot" === t.type ? e.pop() : r > 0 && "group" === e[r].type ? (e.pop(), e.push(t)) : e.push(t),
            e
        }
        function v(e) {
            var t = e.length - 1;
            if ("dot" === e[t].type) return [];
            if ("fun" === e[t].type && "fun" === e[t - 1].token) return e.slice(0, t - 1);
            switch (e[e.length - 1].token) {
            case "}":
                return b(e, {
                    g: ["{"]
                });
            case "]":
                return b(e, {
                    i: ["["]
                });
            case ")":
                return b(e, {
                    i: ["("]
                });
            case ">>":
                return b(e, {
                    i: ["<<"]
                });
            case "end":
                return b(e, {
                    i: ["begin", "case", "fun", "if", "receive", "try"]
                });
            case ",":
                return b(e, {
                    e: ["begin", "try", "when", "->", ",", "(", "[", "{", "<<"]
                });
            case "->":
                return b(e, {
                    r: ["when"],
                    m: ["try", "if", "case", "receive"]
                });
            case ";":
                return b(e, {
                    E: ["case", "fun", "if", "receive", "try", "when"]
                });
            case "catch":
                return b(e, {
                    e: ["try"]
                });
            case "of":
                return b(e, {
                    e: ["case"]
                });
            case "after":
                return b(e, {
                    e: ["receive", "try"]
                });
            default:
                return e
            }
        }
        function b(e, t) {
            for (var r in t) for (var n = e.length - 1,
            i = t[r], o = n - 1; o > -1; o--) if (c(e[o].token, i)) {
                var a = e.slice(0, o);
                switch (r) {
                case "m":
                    return a.concat(e[o]).concat(e[n]);
                case "r":
                    return a.concat(e[n]);
                case "i":
                    return a;
                case "g":
                    return a.concat(m("group"));
                case "E":
                    return a.concat(e[o]);
                case "e":
                    return a.concat(e[o])
                }
            }
            return "E" == r ? [] : e
        }
        function y(r, n) {
            var i, o = t.indentUnit,
            a = x(n),
            s = h(r, 1),
            l = h(r, 2);
            return r.in_string || r.in_atom ? e.Pass: l ? "when" == s.token ? s.column + o: "when" === a && "function" === l.type ? l.indent + o: "(" === a && "fun" === s.token ? s.column + 3 : "catch" === a && (i = _(r, ["try"])) ? i.column: c(a, ["end", "after", "of"]) ? (i = _(r, ["begin", "case", "fun", "if", "receive", "try"]), i ? i.column: e.Pass) : c(a, A) ? (i = _(r, P), i ? i.column: e.Pass) : c(s.token, [",", "|", "||"]) || c(a, [",", "|", "||"]) ? (i = k(r), i ? i.column + i.token.length: o) : "->" == s.token ? c(l.token, ["receive", "case", "if", "try"]) ? l.column + o + o: l.column + o: c(s.token, P) ? s.column + s.token.length: (i = w(r), S(i) ? i.column + o: 0) : 0
        }
        function x(e) {
            var t = e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);
            return S(t) && 0 === t.index ? t[0] : ""
        }
        function k(e) {
            var t = e.tokenStack.slice(0, -1),
            r = C(t, "type", ["open_paren"]);
            return S(t[r]) ? t[r] : !1
        }
        function w(e) {
            var t = e.tokenStack,
            r = C(t, "type", ["open_paren", "separator", "keyword"]),
            n = C(t, "type", ["operator"]);
            return S(r) && S(n) && n > r ? t[r + 1] : S(r) ? t[r] : !1
        }
        function _(e, t) {
            var r = e.tokenStack,
            n = C(r, "token", t);

            return S(r[n]) ? r[n] : !1
        }
        function C(e, t, r) {
            for (var n = e.length - 1; n > -1; n--) if (c(e[n][t], r)) return n;
            return ! 1
        }
        function S(e) {
            return e !== !1 && null != e
        }
        var T = ["-type", "-spec", "-export_type", "-opaque"],
        M = ["after", "begin", "catch", "case", "cond", "end", "fun", "if", "let", "of", "query", "receive", "try", "when"],
        L = /[\->,;]/,
        E = ["->", ";", ","],
        q = ["and", "andalso", "band", "bnot", "bor", "bsl", "bsr", "bxor", "div", "not", "or", "orelse", "rem", "xor"],
        j = /[\+\-\*\/<>=\|:!]/,
        z = ["=", "+", "-", "*", "/", ">", ">=", "<", "=<", "=:=", "==", "=/=", "/=", "||", "<-", "!"],
        I = /[<\(\[\{]/,
        P = ["<<", "(", "[", "{"],
        D = /[>\)\]\}]/,
        A = ["}", "]", ")", ">>"],
        $ = ["is_atom", "is_binary", "is_bitstring", "is_boolean", "is_float", "is_function", "is_integer", "is_list", "is_number", "is_pid", "is_port", "is_record", "is_reference", "is_tuple", "atom", "binary", "bitstring", "boolean", "function", "integer", "list", "number", "pid", "port", "record", "reference", "tuple"],
        O = ["abs", "adler32", "adler32_combine", "alive", "apply", "atom_to_binary", "atom_to_list", "binary_to_atom", "binary_to_existing_atom", "binary_to_list", "binary_to_term", "bit_size", "bitstring_to_list", "byte_size", "check_process_code", "contact_binary", "crc32", "crc32_combine", "date", "decode_packet", "delete_module", "disconnect_node", "element", "erase", "exit", "float", "float_to_list", "garbage_collect", "get", "get_keys", "group_leader", "halt", "hd", "integer_to_list", "internal_bif", "iolist_size", "iolist_to_binary", "is_alive", "is_atom", "is_binary", "is_bitstring", "is_boolean", "is_float", "is_function", "is_integer", "is_list", "is_number", "is_pid", "is_port", "is_process_alive", "is_record", "is_reference", "is_tuple", "length", "link", "list_to_atom", "list_to_binary", "list_to_bitstring", "list_to_existing_atom", "list_to_float", "list_to_integer", "list_to_pid", "list_to_tuple", "load_module", "make_ref", "module_loaded", "monitor_node", "node", "node_link", "node_unlink", "nodes", "notalive", "now", "open_port", "pid_to_list", "port_close", "port_command", "port_connect", "port_control", "pre_loaded", "process_flag", "process_info", "processes", "purge_module", "put", "register", "registered", "round", "self", "setelement", "size", "spawn", "spawn_link", "spawn_monitor", "spawn_opt", "split_binary", "statistics", "term_to_binary", "time", "throw", "tl", "trunc", "tuple_size", "tuple_to_list", "unlink", "unregister", "whereis"],
        R = /[\w@??-????-????-????-??]/,
        F = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
        return {
            startState: function() {
                return {
                    tokenStack: [],
                    in_string: !1,
                    in_atom: !1
                }
            },
            token: function(e, t) {
                return r(e, t)
            },
            indent: function(e, t) {
                return y(e, t)
            },
            lineComment: "%"
        }
    })
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../javascript/javascript"), require("../css/css"), require("../htmlmixed/htmlmixed")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../javascript/javascript", "../css/css", "../htmlmixed/htmlmixed"], e) : e(CodeMirror)
} (function(e) {
    "use strict";
    e.defineMode("jade",
    function(t) {
        function r() {
            this.javaScriptLine = !1,
            this.javaScriptLineExcludesColon = !1,
            this.javaScriptArguments = !1,
            this.javaScriptArgumentsDepth = 0,
            this.isInterpolating = !1,
            this.interpolationNesting = 0,
            this.jsState = Q.startState(),
            this.restOfLine = "",
            this.isIncludeFiltered = !1,
            this.isEach = !1,
            this.lastTag = "",
            this.scriptType = "",
            this.isAttrs = !1,
            this.attrsNest = [],
            this.inAttributeName = !0,
            this.attributeIsType = !1,
            this.attrValue = "",
            this.indentOf = 1 / 0,
            this.indentToken = "",
            this.innerMode = null,
            this.innerState = null,
            this.innerModeForLine = !1
        }
        function n(e, t) {
            if (e.sol() && (t.javaScriptLine = !1, t.javaScriptLineExcludesColon = !1), t.javaScriptLine) {
                if (t.javaScriptLineExcludesColon && ":" === e.peek()) return t.javaScriptLine = !1,
                void(t.javaScriptLineExcludesColon = !1);
                var r = Q.token(e, t.jsState);
                return e.eol() && (t.javaScriptLine = !1),
                r || !0
            }
        }
        function i(e, t) {
            if (t.javaScriptArguments) {
                if (0 === t.javaScriptArgumentsDepth && "(" !== e.peek()) return void(t.javaScriptArguments = !1);
                if ("(" === e.peek() ? t.javaScriptArgumentsDepth++:")" === e.peek() && t.javaScriptArgumentsDepth--, 0 === t.javaScriptArgumentsDepth) return void(t.javaScriptArguments = !1);
                var r = Q.token(e, t.jsState);
                return r || !0
            }
        }
        function o(e) {
            return e.match(/^yield\b/) ? "keyword": void 0
        }
        function a(e) {
            return e.match(/^(?:doctype) *([^\n]+)?/) ? K: void 0
        }
        function s(e, t) {
            return e.match("#{") ? (t.isInterpolating = !0, t.interpolationNesting = 0, "punctuation") : void 0
        }
        function l(e, t) {
            if (t.isInterpolating) {
                if ("}" === e.peek()) {
                    if (t.interpolationNesting--, t.interpolationNesting < 0) return e.next(),
                    t.isInterpolating = !1,
                    "puncutation"
                } else "{" === e.peek() && t.interpolationNesting++;
                return Q.token(e, t.jsState) || !0
            }
        }
        function c(e, t) {
            return e.match(/^case\b/) ? (t.javaScriptLine = !0, V) : void 0
        }
        function u(e, t) {
            return e.match(/^when\b/) ? (t.javaScriptLine = !0, t.javaScriptLineExcludesColon = !0, V) : void 0
        }
        function d(e) {
            return e.match(/^default\b/) ? V: void 0
        }
        function f(e, t) {
            return e.match(/^extends?\b/) ? (t.restOfLine = "string", V) : void 0
        }
        function m(e, t) {
            return e.match(/^append\b/) ? (t.restOfLine = "variable", V) : void 0
        }
        function h(e, t) {
            return e.match(/^prepend\b/) ? (t.restOfLine = "variable", V) : void 0
        }
        function p(e, t) {
            return e.match(/^block\b *(?:(prepend|append)\b)?/) ? (t.restOfLine = "variable", V) : void 0
        }
        function g(e, t) {
            return e.match(/^include\b/) ? (t.restOfLine = "string", V) : void 0
        }
        function v(e, t) {
            return e.match(/^include:([a-zA-Z0-9\-]+)/, !1) && e.match("include") ? (t.isIncludeFiltered = !0, V) : void 0
        }
        function b(e, t) {
            if (t.isIncludeFiltered) {
                var r = M(e, t);
                return t.isIncludeFiltered = !1,
                t.restOfLine = "string",
                r
            }
        }
        function y(e, t) {
            return e.match(/^mixin\b/) ? (t.javaScriptLine = !0, V) : void 0
        }
        function x(e, t) {
            return e.match(/^\+([-\w]+)/) ? (e.match(/^\( *[-\w]+ *=/, !1) || (t.javaScriptArguments = !0, t.javaScriptArgumentsDepth = 0), "variable") : e.match(/^\+#{/, !1) ? (e.next(), t.mixinCallAfter = !0, s(e, t)) : void 0
        }
        function k(e, t) {
            return t.mixinCallAfter ? (t.mixinCallAfter = !1, e.match(/^\( *[-\w]+ *=/, !1) || (t.javaScriptArguments = !0, t.javaScriptArgumentsDepth = 0), !0) : void 0
        }
        function w(e, t) {
            return e.match(/^(if|unless|else if|else)\b/) ? (t.javaScriptLine = !0, V) : void 0
        }
        function _(e, t) {
            return e.match(/^(- *)?(each|for)\b/) ? (t.isEach = !0, V) : void 0
        }
        function C(e, t) {
            if (t.isEach) {
                if (e.match(/^ in\b/)) return t.javaScriptLine = !0,
                t.isEach = !1,
                V;
                if (e.sol() || e.eol()) t.isEach = !1;
                else if (e.next()) {
                    for (; ! e.match(/^ in\b/, !1) && e.next(););
                    return "variable"
                }
            }
        }
        function S(e, t) {
            return e.match(/^while\b/) ? (t.javaScriptLine = !0, V) : void 0
        }
        function T(e, t) {
            var r;
            return (r = e.match(/^(\w(?:[-:\w]*\w)?)\/?/)) ? (t.lastTag = r[1].toLowerCase(), "script" === t.lastTag && (t.scriptType = "application/javascript"), "tag") : void 0
        }
        function M(r, n) {
            if (r.match(/^:([\w\-]+)/)) {
                var i;
                return t && t.innerModes && (i = t.innerModes(r.current().substring(1))),
                i || (i = r.current().substring(1)),
                "string" == typeof i && (i = e.getMode(t, i)),
                F(r, n, i),
                "atom"
            }
        }
        function L(e, t) {
            return e.match(/^(!?=|-)/) ? (t.javaScriptLine = !0, "punctuation") : void 0
        }
        function E(e) {
            return e.match(/^#([\w-]+)/) ? Z: void 0
        }
        function q(e) {
            return e.match(/^\.([\w-]+)/) ? G: void 0
        }
        function j(e, t) {
            return "(" == e.peek() ? (e.next(), t.isAttrs = !0, t.attrsNest = [], t.inAttributeName = !0, t.attrValue = "", t.attributeIsType = !1, "punctuation") : void 0
        }
        function z(e, t) {
            if (t.isAttrs) {
                if (X[e.peek()] && t.attrsNest.push(X[e.peek()]), t.attrsNest[t.attrsNest.length - 1] === e.peek()) t.attrsNest.pop();
                else if (e.eat(")")) return t.isAttrs = !1,
                "punctuation";
                if (t.inAttributeName && e.match(/^[^=,\)!]+/)) return ("=" === e.peek() || "!" === e.peek()) && (t.inAttributeName = !1, t.jsState = Q.startState(), "script" === t.lastTag && "type" === e.current().trim().toLowerCase() ? t.attributeIsType = !0 : t.attributeIsType = !1),
                "attribute";
                var r = Q.token(e, t.jsState);
                if (t.attributeIsType && "string" === r && (t.scriptType = e.current().toString()), 0 === t.attrsNest.length && ("string" === r || "variable" === r || "keyword" === r)) try {
                    return Function("", "var x " + t.attrValue.replace(/,\s*$/, "").replace(/^!/, "")),
                    t.inAttributeName = !0,
                    t.attrValue = "",
                    e.backUp(e.current().length),
                    z(e, t)
                } catch(n) {}
                return t.attrValue += e.current(),
                r || !0
            }
        }
        function I(e, t) {
            return e.match(/^&attributes\b/) ? (t.javaScriptArguments = !0, t.javaScriptArgumentsDepth = 0, "keyword") : void 0
        }
        function P(e) {
            return e.sol() && e.eatSpace() ? "indent": void 0
        }
        function D(e, t) {
            return e.match(/^ *\/\/(-)?([^\n]*)/) ? (t.indentOf = e.indentation(), t.indentToken = "comment", "comment") : void 0
        }
        function A(e) {
            return e.match(/^: */) ? "colon": void 0
        }
        function $(e, t) {
            return e.match(/^(?:\| ?| )([^\n]+)/) ? "string": e.match(/^(<[^\n]*)/, !1) ? (F(e, t, "htmlmixed"), t.innerModeForLine = !0, H(e, t, !0)) : void 0
        }
        function O(e, t) {
            if (e.eat(".")) {
                var r = null;
                return "script" === t.lastTag && -1 != t.scriptType.toLowerCase().indexOf("javascript") ? r = t.scriptType.toLowerCase().replace(/"|'/g, "") : "style" === t.lastTag && (r = "css"),
                F(e, t, r),
                "dot"
            }
        }
        function R(e) {
            return e.next(),
            null
        }
        function F(r, n, i) {
            i = e.mimeModes[i] || i,
            i = t.innerModes ? t.innerModes(i) || i: i,
            i = e.mimeModes[i] || i,
            i = e.getMode(t, i),
            n.indentOf = r.indentation(),
            i && "null" !== i.name ? n.innerMode = i: n.indentToken = "string"
        }
        function H(e, t, r) {
            return e.indentation() > t.indentOf || t.innerModeForLine && !e.sol() || r ? t.innerMode ? (t.innerState || (t.innerState = t.innerMode.startState ? t.innerMode.startState(e.indentation()) : {}), e.hideFirstChars(t.indentOf + 2,
            function() {
                return t.innerMode.token(e, t.innerState) || !0
            })) : (e.skipToEnd(), t.indentToken) : void(e.sol() && (t.indentOf = 1 / 0, t.indentToken = null, t.innerMode = null, t.innerState = null))
        }
        function N(e, t) {
            if (e.sol() && (t.restOfLine = ""), t.restOfLine) {
                e.skipToEnd();
                var r = t.restOfLine;
                return t.restOfLine = "",
                r
            }
        }
        function B() {
            return new r
        }
        function U(e) {
            return e.copy()
        }
        function W(e, t) {
            var r = H(e, t) || N(e, t) || l(e, t) || b(e, t) || C(e, t) || z(e, t) || n(e, t) || i(e, t) || k(e, t) || o(e, t) || a(e, t) || s(e, t) || c(e, t) || u(e, t) || d(e, t) || f(e, t) || m(e, t) || h(e, t) || p(e, t) || g(e, t) || v(e, t) || y(e, t) || x(e, t) || w(e, t) || _(e, t) || S(e, t) || T(e, t) || M(e, t) || L(e, t) || E(e, t) || q(e, t) || j(e, t) || I(e, t) || P(e, t) || $(e, t) || D(e, t) || A(e, t) || O(e, t) || R(e, t);
            return r === !0 ? null: r
        }
        var V = "keyword",
        K = "meta",
        Z = "builtin",
        G = "qualifier",
        X = {
            "{": "}",
            "(": ")",
            "[": "]"
        },
        Q = e.getMode(t, "javascript");
        return r.prototype.copy = function() {
            var t = new r;
            return t.javaScriptLine = this.javaScriptLine,
            t.javaScriptLineExcludesColon = this.javaScriptLineExcludesColon,
            t.javaScriptArguments = this.javaScriptArguments,
            t.javaScriptArgumentsDepth = this.javaScriptArgumentsDepth,
            t.isInterpolating = this.isInterpolating,
            t.interpolationNesting = this.intpolationNesting,
            t.jsState = e.copyState(Q, this.jsState),
            t.innerMode = this.innerMode,
            this.innerMode && this.innerState && (t.innerState = e.copyState(this.innerMode, this.innerState)),
            t.restOfLine = this.restOfLine,
            t.isIncludeFiltered = this.isIncludeFiltered,
            t.isEach = this.isEach,
            t.lastTag = this.lastTag,
            t.scriptType = this.scriptType,
            t.isAttrs = this.isAttrs,
            t.attrsNest = this.attrsNest.slice(),
            t.inAttributeName = this.inAttributeName,
            t.attributeIsType = this.attributeIsType,
            t.attrValue = this.attrValue,
            t.indentOf = this.indentOf,
            t.indentToken = this.indentToken,
            t.innerModeForLine = this.innerModeForLine,
            t
        },
        {
            startState: B,
            copyState: U,
            token: W
        }
    }),
    e.defineMIME("text/x-jade", "jade")
});