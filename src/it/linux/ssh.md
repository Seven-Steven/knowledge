---
---

# SSH

## ssh 的超能力

### 免密码登录

可以使用 `ssh_copy_id` 命令把本地主机的公钥复制到远程主机的 'authorized_keys' 文件中，从而实现远程主机的免密码登录。

```shell
ssh-copy-id ${user}@${host} -p ${port} [-i ${path_of_id_rsa_pub}]
```

其中:

- `${user}` 表示远程主机用户名；
- `${host}` 表示远程主机地址，可以是 ip，也可以是域名；
- `${port}` 表示远程主机 ssh 服务端口，如果远程主机 ssh 端口是 22，可以省略此项参数；
- `${path_of_id_rsa_pub}` 表示本地主机 rsa 公钥文件路径，缺省状态下命令会读取 `~/.ssh/id_rsa.pub` 作为公钥文件。

如果本机没有 rsa 公钥文件，可以使用命令 `ssh-keygen` 生成，三次回车即可。
*该命令的作用等同于 `cat ~/.ssh/id_rsa.pub | ssh ${user}@${host} "cat - >> ~/.ssh/authorized_keys"`*

### 远程执行命令

```shell
ssh ${user}@${host} "$command"
```

### 免输入 ip

可以通过配置 `~/.ssh/config` 文件来简化 ssh 操作：

```shell
# 配置远程主机别名
Host ${host_name_alias}
        # 配置远程主机地址
        HostName ${host}
        # 配置远程主机用户名
        User ${user}
        # 配置本地主机 rsa 公钥文件
        IdentityFile ${path_of_id_rsa_pub}
        # 配置远程主机 ssh 服务端口
        Port ${port}
```

其中：

- `${host_name_alias}` 表示主机别名，和域名的作用类似，配置后可以通过这个别名连接到对应的主机；
  这里支持通配符
- `${host}` 表示远程主机地址，可以是 ip，也可以是域名；
- `${user}` 表示远程主机用户名；
- `${path_of_id_rsa_pub}` 表示本地主机 rsa 公钥文件路径，缺省状态下命令会读取 `~/.ssh/id_rsa.pub` 作为公钥文件。
- `${port}` 表示远程主机 ssh 服务端口，如果远程主机 ssh 端口是 22，可以省略此项参数；

配置之后，便可以通过 `ssh ${host_name_alias}` 命令连接远程主机，可以通过 `scp ${local_file_path} ${host_name_alias}:${remote_path}` 命令向远程主机复制文件，可以通过 `sftp ${host_name_alias}` 命令建立 sftp 连接。

**一个 Host 代表一个主机，可以多次重复上面的代码片段以配置多台远程主机。**

### 端口转发

我们可以通过端口转发的方式吧远程端口映射到本地。

```shell
ssh [-Nf] -L ${local_port}:${proxied_host}:${proxied_port} ${remote_user}@${remote_host} -p ${remote_ssh_port}
```

其中：

- `${local_port}` 表示映射后的本地端口；
- `${proxied_host}` 表示被代理的主机地址，这个地址是相对于 `${remote_host}` 的地址；
- `${proxied_port}` 表示被代理的主机端口；
- `${remote_user}` 表示远程主机的用户名；
- `${remote_host}` 表示远程主机的地址；
- `${remote_ssh_port}` 表示远程主机的 ssh 端口；
- `-N` 表示创建隧道不会打开远程 shell2;
- `-f` 表示后台运行，关闭当前 ssh 会话不会同时关闭 ssh 隧道；

比如我现在有 A，B，C 三台主机，A 主机可以连接 B 主机，B 主机可以连接 C 主机，A 主机无法连接 C 主机。那么我们就可以通过 `ssh` 命令把 C 主机的端口映射到 A 主机。

```shell
ssh -L ${port_A}:${host_C}:${port_C} ${user_B}@${host_B} -p ${ssh_port_B}
```

通过上面的命令，我们可以通过 B 主机把 `${host_C}` 主机上面 `${port_C}` 对应端口上的服务映射到 A 主机的 `${port_A}` 端口。
然后我们就可以通过主机 A 的 `${port_A}` 端口来访问原本运行在主机 C 上面 `${port_C}` 端口的服务。

### 简化版端口转发

通过配置 `~/.ssh/config` 文件也可以实现便捷的端口转发。

```shell
# 配置远程主机别名
Host ${host_name_alias}
        # 配置远程主机地址
        HostName ${host}
        # 配置远程主机用户名
        User ${user}
        # 配置本地主机 rsa 公钥文件
        IdentityFile ${path_of_id_rsa_pub}
        # 配置远程主机 ssh 服务端口
        Port ${port}
        # 配置端口转发
        LocalForward ${local_port} ${proxied_host}:${proxied_port}
```

其中：

- `${host_name_alias}` 表示主机别名，和域名的作用类似，配置后可以通过这个别名连接到对应的主机；
  这里支持通配符
- `${host}` 表示远程主机地址，可以是 ip，也可以是域名；
- `${user}` 表示远程主机用户名；
- `${path_of_id_rsa_pub}` 表示本地主机 rsa 公钥文件路径，缺省状态下命令会读取 `~/.ssh/id_rsa.pub` 作为公钥文件。
- `${port}` 表示远程主机 ssh 服务端口，如果远程主机 ssh 端口是 22，可以省略此项参数；
- `${local_port}` 表示映射后的本地端口；
- `${proxied_host}` 表示被代理的主机地址，这个地址是相对于 `${host}` 的地址；
- `${proxied_port}` 表示被代理的主机端口；

### vim 编辑远程文件

```shell
vim scp://${remote_user}@${remote_host}:${remote_ssh_port}//${remote_file_path}
# vim scp://localhost//etc/hosts
# vim scp://root@localhost:22//etc/hosts
```

### 删除密钥

```shell
ssh-keygen -R ${host}
```
