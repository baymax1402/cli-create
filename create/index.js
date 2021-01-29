const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("../utils/fs-promise");
const install = require("../utils/install");

module.exports = async (name) => {
    const projectDir = path.join(process.cwd(), name);
    await mkdirp(projectDir);
    console.log(`创建${name}文件成功`);
    const { template, dir, name: fileName } = require("../templates/vue/package")(name);
    await fs.writeFile(path.join(projectDir, dir, fileName), template.trim());
    console.log(`创建${fileName}文件成功`);
    install({ cwd: projectDir });

}